// import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  // return (
  //   <div id="error-page">
  //     <h1>Oops!</h1>
  //     <p>Sorry, an unexpected error has occurred.</p>
  //     <p>
  //       <i>{error.statusText || error.message}</i>
  //     </p>
  //   </div>
  // );

  return (
    <div className="flex items-center justify-center flex-col mt-48">
      <h1 className='text-teal text-2xl font-semibold'>Page not found.</h1>
      <a href="/">Return Home</a>
    </div>
  )
}