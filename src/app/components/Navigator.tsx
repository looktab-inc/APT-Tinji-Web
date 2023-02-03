import { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import Image from "next/image";

type Props = {
  isLogin: boolean;
  account: any;
  disconnectWallet: any;
};
export const Navigator: FC<Props> = ({
  isLogin,
  account,
  disconnectWallet,
}) => {
  const ADDRESS = account?.address ? account.address : "";
  return (
    <>
      <div className="flex flex-row justify-between px-[100px] h-[80px] border-b border-[#1C1C1C]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center">
            <Image
              src="/images/tingi_logo.png"
              alt="home"
              width={87}
              height={20}
            />
          </div>
        </div>
        {account ? (
          <div className="flex flex-row items-center">
            <div className="w-[121px] h-[40px] text-[16px] bg-[#343434] rounded-2xl items-center justify-center flex py-[10px] px-[12px] mr-[12px]">
              {ADDRESS.substr(0, 5) +
                "..." +
                ADDRESS.substr(ADDRESS.length - 4, ADDRESS.length)}
            </div>
            <Image
              src="/images/mo.jpeg"
              alt="arrow"
              width={40}
              height={40}
              className="rounded-[50px] cursor-pointer"
              onClick={disconnectWallet}
            />
          </div>
        ) : (
          <div className="ml-[10px] font-bold text-[16px]">{isLogin}</div>
        )}
      </div>
    </>
  );
};
