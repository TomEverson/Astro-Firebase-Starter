import { logOut } from "../../../utils/auth";

export const Logout: preact.FunctionComponent = () => {
  return (
    <button
      class="bg-[#4285f4] text-gray-100 hover:text-white shadow font-bold text-sm py-3 px-4 rounded text-center cursor-pointer w-64 mt-8"
      onClick={logOut}
    >
      Log Out
    </button>
  );
};
