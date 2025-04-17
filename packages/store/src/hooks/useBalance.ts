// import { useRecoilValue } from "recoil";
// import { balanceAtom } from "../atoms/balance";

import { useAtom } from "jotai"
import { balanceAtom } from "../atoms/balance"

// export const useBalance = () => {
//   const value = useRecoilValue(balanceAtom);
//   return value;
// };


export const useBalance = () =>{
  const [value] = useAtom(balanceAtom)
  return value
}