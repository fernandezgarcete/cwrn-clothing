import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
  }

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={ logGoogleUser }>
        Sign In with Google Popup
      </button>
      <button onClick={ logGoogleRedirectUser }>
        Sign In with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
