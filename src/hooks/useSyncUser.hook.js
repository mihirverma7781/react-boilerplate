import { useDispatch } from "react-redux";
import { setTokenLocal, setUserLocal } from "../utils/localStorage.util";
import { updateToken, updateUser } from "../redux/redux-slice/user.slice";

export const useSyncUser = ({ user, token }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTokenLocal(token);
    setUserLocal(user);
    dispatch(updateUser(user));
    dispatch(updateToken(token));
  }, []);

  return true;
};
