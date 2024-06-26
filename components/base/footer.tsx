"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Logo from "../svg/logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TextButton from "../shared/textButton";

const Component = () => {
  const path = usePathname();

  return (
    <Footer
      className="relative bg-darkBlue pt-12"
      style={{ backgroundImage: `url('/images/noise.png')` }}
    >
      <div className="w-full text-center max-w-7xl mx-auto xl:px-0 px-5 pb-5">
        <div className="w-full flex sm:gap-y-0 gap-y-5 sm:flex-row flex-col items-center sm:justify-between justify-center">
          <Link href="/">
            <Logo />
          </Link>{" "}
          <Footer.LinkGroup className="laptop:gap-x-8 gap-x-4 grid xlaptop:grid-cols-4 grid-cols-2 xlaptop:gap-y-0 gap-y-3">
            <Link href="/process" className="text-white">
              <TextButton className={path === "/process" ? "text-orange" : ""}>
                Process
              </TextButton>
            </Link>
            <Link href="/about" className="text-white">
              <TextButton className={path === "/about" ? "text-orange" : ""}>
                About Us
              </TextButton>
            </Link>
            <Link href="/blog" className="text-white">
              <TextButton className={path === "/blog" ? "text-orange" : ""}>
                Blog
              </TextButton>
            </Link>
            <Link href="/program" className="text-white">
              <TextButton className={path === "/program" ? "text-orange" : ""}>
                Programs
              </TextButton>
            </Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider className="mt-[0.5rem!important] text-white/20" />
        <div className="w-full flex flex-col-reverse sm:gap-y-0 gap-y-5 sm:flex-row  items-center sm:justify-between justify-center">
          <Footer.Copyright
            href="#"
            by="e3.ventures 2024. All rights reserved"
            className="text-white"
          />
          <div className="mt-4 flex gap-x-16 sm:mt-0 sm:justify-center">
            <a
              href="https://twitter.com/e3_venture72396"
              target="blank"
              className="text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <g clip-path="url(#clip0_95_467)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9416 23.499L10.3921 15.5891L3.44496 23.499H0.505859L9.08818 13.7301L0.505859 1.49902H8.05181L13.2821 8.95404L19.8354 1.49902H22.7745L14.5904 10.8155L23.4875 23.499H15.9416ZM19.2146 21.269H17.2358L4.71421 3.72902H6.6932L11.7082 10.7522L12.5754 11.9709L19.2146 21.269Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_95_467">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(-0.00390625 0.499023)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/e3.ventures/"
              target="blank"
              className="text-white"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_593_101)">
                  <path
                    d="M11.9956 0.499023C8.73927 0.499023 8.32978 0.514023 7.05033 0.571021C5.77088 0.631018 4.89941 0.832011 4.13594 1.129C3.33511 1.43022 2.60973 1.90271 2.01052 2.51345C1.40016 3.11297 0.92772 3.83826 0.62607 4.63887C0.329081 5.40084 0.126589 6.27381 0.068091 7.54876C0.0110932 8.83121 -0.00390625 9.2392 -0.00390625 12.5001C-0.00390625 15.758 0.0110932 16.1659 0.068091 17.4454C0.128089 18.7233 0.329081 19.5948 0.62607 20.3583C0.933559 21.1472 1.34304 21.8162 2.01052 22.4837C2.67649 23.1512 3.34547 23.5622 4.13444 23.8681C4.89941 24.1651 5.76938 24.3676 7.04733 24.4261C8.32828 24.4831 8.73627 24.4981 11.9956 24.4981C15.255 24.4981 15.6615 24.4831 16.9425 24.4261C18.2189 24.3661 19.0934 24.1651 19.8568 23.8681C20.6572 23.5668 21.382 23.0943 21.9808 22.4837C22.6482 21.8162 23.0577 21.1472 23.3652 20.3583C23.6607 19.5948 23.8632 18.7233 23.9232 17.4454C23.9802 16.1659 23.9952 15.758 23.9952 12.4986C23.9952 9.2392 23.9802 8.83121 23.9232 7.55026C23.8632 6.27381 23.6607 5.40084 23.3652 4.63887C23.0636 3.83824 22.5912 3.11294 21.9808 2.51345C21.3817 1.90248 20.6563 1.42996 19.8553 1.129C19.0904 0.832011 18.2174 0.629519 16.941 0.571021C15.66 0.514023 15.2535 0.499023 11.9926 0.499023H11.9971H11.9956ZM10.9202 2.66194H11.9971C15.201 2.66194 15.5805 2.67244 16.845 2.73094C18.0149 2.78344 18.6509 2.97993 19.0739 3.14342C19.6334 3.36092 20.0338 3.62191 20.4538 4.04189C20.8738 4.46187 21.1333 4.86086 21.3508 5.42184C21.5158 5.84332 21.7108 6.4793 21.7633 7.64926C21.8218 8.91371 21.8338 9.29319 21.8338 12.4956C21.8338 15.698 21.8218 16.0789 21.7633 17.3434C21.7108 18.5133 21.5143 19.1478 21.3508 19.5708C21.1584 20.0918 20.8514 20.5629 20.4523 20.9493C20.0323 21.3692 19.6334 21.6287 19.0724 21.8462C18.6524 22.0112 18.0164 22.2062 16.845 22.2602C15.5805 22.3172 15.201 22.3307 11.9971 22.3307C8.79326 22.3307 8.41228 22.3172 7.14783 22.2602C5.97787 22.2062 5.34339 22.0112 4.92041 21.8462C4.39918 21.6541 3.92764 21.3476 3.54046 20.9493C3.1411 20.5623 2.83357 20.0908 2.64049 19.5693C2.477 19.1478 2.28051 18.5118 2.22801 17.3419C2.17101 16.0774 2.15901 15.698 2.15901 12.4926C2.15901 9.28869 2.17101 8.91071 2.22801 7.64626C2.28201 6.4763 2.477 5.84032 2.64199 5.41734C2.85949 4.85786 3.12048 4.45737 3.54046 4.03739C3.96044 3.61741 4.35943 3.35792 4.92041 3.14042C5.34339 2.97543 5.97787 2.78044 7.14783 2.72644C8.25478 2.67544 8.68377 2.66044 10.9202 2.65894V2.66194ZM18.4019 4.65387C18.2128 4.65387 18.0256 4.69111 17.8509 4.76348C17.6762 4.83584 17.5174 4.94191 17.3837 5.07562C17.25 5.20933 17.1439 5.36807 17.0716 5.54277C16.9992 5.71747 16.962 5.90472 16.962 6.09381C16.962 6.28291 16.9992 6.47015 17.0716 6.64486C17.1439 6.81956 17.25 6.9783 17.3837 7.11201C17.5174 7.24572 17.6762 7.35179 17.8509 7.42415C18.0256 7.49651 18.2128 7.53376 18.4019 7.53376C18.7838 7.53376 19.1501 7.38205 19.4201 7.11201C19.6901 6.84197 19.8418 6.47571 19.8418 6.09381C19.8418 5.71192 19.6901 5.34566 19.4201 5.07562C19.1501 4.80558 18.7838 4.65387 18.4019 4.65387ZM11.9971 6.3368C11.1798 6.32405 10.368 6.47403 9.6092 6.778C8.85035 7.08197 8.15956 7.53387 7.57704 8.10737C6.99451 8.68088 6.53189 9.36454 6.21612 10.1186C5.90035 10.8726 5.73773 11.6819 5.73773 12.4993C5.73773 13.3168 5.90035 14.1261 6.21612 14.8801C6.53189 15.6341 6.99451 16.3178 7.57704 16.8913C8.15956 17.4648 8.85035 17.9167 9.6092 18.2206C10.368 18.5246 11.1798 18.6746 11.9971 18.6618C13.6149 18.6366 15.1578 17.9762 16.2929 16.8233C17.4281 15.6703 18.0643 14.1173 18.0643 12.4993C18.0643 10.8814 17.4281 9.32831 16.2929 8.17536C15.1578 7.02241 13.6149 6.36204 11.9971 6.3368ZM11.9971 8.49822C13.0581 8.49822 14.0756 8.91969 14.8258 9.6699C15.576 10.4201 15.9975 11.4376 15.9975 12.4986C15.9975 13.5595 15.576 14.577 14.8258 15.3272C14.0756 16.0775 13.0581 16.4989 11.9971 16.4989C10.9362 16.4989 9.91868 16.0775 9.16847 15.3272C8.41826 14.577 7.99679 13.5595 7.99679 12.4986C7.99679 11.4376 8.41826 10.4201 9.16847 9.6699C9.91868 8.91969 10.9362 8.49822 11.9971 8.49822Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_593_101">
                    <rect
                      width="24"
                      height="23.9996"
                      fill="white"
                      transform="translate(-0.00390625 0.499023)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/e3ventures-ksa/"
              target="blank"
              className="text-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_593_105)">
                  <path
                    d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_593_105">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61557364555074"
              target="blank"
              className="text-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_593_110)">
                  <path
                    d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_593_110">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Component;
