import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import {CopyToClipboard} from "react-copy-to-clipboard";
import Loader from "./Loader";
import Error from "./Error";

const Shorten = () => {
  const [content, setContent] = useState("");
  const [shortLink, setShortLink] = useState(ls());

  const url = `https://api.shrtco.de/v2/shorten?url=${content}`;

  let displayLink;
  let errorElement = useRef(null);
  let inputField = useRef(null);

  useEffect(() => {
    localStorage.setItem("shortLink", JSON.stringify(shortLink));
  }, [shortLink]);

  function ls() {
    const localData = localStorage.getItem("shortLink");
    return localData
      ? JSON.parse(localData)
      : {
          loading: false,
          data: [],
        };
  }

  function getShort() {
    setShortLink({
      loading: true,
      data: [],
      copied: false,
    });

    axios
      .get(url)
      .then(response => {
        setShortLink({
          loading: false,
          data: [...shortLink.data, response.data],
        });
      })
      .catch(err => {
        setShortLink({
          loading: false,
          data: [...shortLink.data],
          error: true,
        });
        console.log(err);
      });
  }

  const handleSubmit = e => {
    e.preventDefault(e);

    setContent("");

    if (content) {
      getShort();
      errorElement.current.classList.remove("block");
      errorElement.current.classList.add("hidden");
      inputField.current.classList.remove("placeholder-color3");
      inputField.current.classList.add("focus:ring-color1");
      inputField.current.classList.remove("focus:ring-color3");
    } else {
      errorElement.current.classList.remove("hidden");
      errorElement.current.classList.add("block");
      inputField.current.classList.add("placeholder-color3");
      inputField.current.classList.remove("focus:ring-color1");
      inputField.current.classList.add("focus:ring-color3");
      inputField.current.focus();
    }
  };

  const onCopy = function (e) {
    e.target.textContent = "Copied!";
    e.target.classList.remove("bg-color1");
    e.target.classList.add("bg-color2");
  };

  if (shortLink.data) {
    displayLink = shortLink.data.map((data, i) => (
      <div
        key={i}
        className='bg-white p-4 rounded-md mt-6 md:grid md:grid-cols-2 md:items-center md:gap-6'
      >
        <div className='border-b pb-4  md:border-0 md:pb-0'>
          <p className='break-words lg:max-w-full'>
            {data.result.original_link}
          </p>
        </div>
        <div className='pt-4 md:flex md:items-center md:gap-6 md:justify-end md:pt-0'>
          <p className='text-color1'>{data.result.full_short_link2}</p>
          <CopyToClipboard text={data.result.full_short_link2}>
            <button
              className='copyBtn bg-color1 py-3 w-full block mt-3 rounded-md hover:opacity-80 text-white md:mt-0 md:w-28'
              aria-label='copy'
              onClick={e => onCopy(e)}
            >
              Copy
            </button>
          </CopyToClipboard>
        </div>
      </div>
    ));
  }

  if (shortLink.loading) {
    displayLink = <Loader />;
  }

  if (shortLink.error) {
    displayLink = <Error />;
  }

  return (
    <>
      <div className='rounded-xl bg-color2 p-6 bg-shortenMobile bg-no-repeat bg-right-top w-full md:bg-shortenDesktop md:p-10 form'>
        <form onSubmit={e => handleSubmit(e)}>
          <div className='md:flex md:gap-6 relative'>
            <input
              type='text'
              ref={inputField}
              value={content}
              placeholder='Shorten a link here'
              className='block w-full py-3 px-5 rounded-md border-0 focus:ring-4 focus:ring-color1'
              aria-label='Link to be shorten'
              onChange={e => setContent(e.target.value)}
            />

            <p
              ref={errorElement}
              className='text-color3 mt-2 hidden md:absolute md:-bottom-7'
            >
              <em>Please add a link</em>
            </p>

            <button
              type='submit'
              aria-label='Shorten it!'
              className='bg-color1 py-3 text-white w-full block rounded-md hover:opacity-90 mt-6 md:mt-0 md:w-48'
            >
              Shorten it!
            </button>
          </div>
        </form>
      </div>
      <div className='pt-20 md:pt-14'>{displayLink}</div>
    </>
  );
};

export default Shorten;
