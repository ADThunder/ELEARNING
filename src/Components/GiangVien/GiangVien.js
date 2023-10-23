import React from "react";
import { Carousel } from "antd";
import "./giangVien.scss";

const GiangVien = () => {
  return (
    <div className="container mx-auto py-20">
      <h2 className="text-center font-bold text-3xl mb-10 text-orange-500">
        Danh sách giảng viên
      </h2>
      <Carousel
        slidesToShow={4}
        // slidesToScroll={1}
        // autoplay={true}
        // speed={2000}
        // autoplaySpeed={2000}
        // cssEase={"linear"}
        dots={false}
      >
        <div className="p-3">
          <div className="w-full max-w-sm  border border-gray-200 rounded-lg shadow bgGiangVien">
            <div className="flex justify-end px-4 pt-4">
              <button
                data-dropdown-toggle="dropdown"
                className="inline-block text-gray-500 dark:text-gray-400  rounded-lg text-sm p-1.5"
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>
              <div
                id="dropdown"
                className="z-10 hidden text-base list-none rounded-lg shadow w-44 dark:bg-gray-700"
              ></div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://picsum.photos/1000"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                IcarDi MenBor
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Chuyên gia ngôn ngữ Vue Js
              </span>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="w-full max-w-sm  border border-gray-200 rounded-lg shadow bgGiangVien">
            <div className="flex justify-end px-4 pt-4">
              <button
                data-dropdown-toggle="dropdown"
                className="inline-block text-gray-500 dark:text-gray-400  rounded-lg text-sm p-1.5"
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>
              <div
                id="dropdown"
                className="z-10 hidden text-base list-none rounded-lg shadow w-44 dark:bg-gray-700"
              ></div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://picsum.photos/1000"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Big DadMoon
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Chuyên gia lĩnh vực lập trình
              </span>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="w-full max-w-sm  border border-gray-200 rounded-lg shadow bgGiangVien">
            <div className="flex justify-end px-4 pt-4">
              <button
                data-dropdown-toggle="dropdown"
                className="inline-block text-gray-500 dark:text-gray-400  rounded-lg text-sm p-1.5"
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>
              <div
                id="dropdown"
                className="z-10 hidden text-base list-none rounded-lg shadow w-44 dark:bg-gray-700"
              ></div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://picsum.photos/1000"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Bladin Slaham
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Chuyên gia hệ thống máy tính
              </span>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="w-full max-w-sm  border border-gray-200 rounded-lg shadow bgGiangVien">
            <div className="flex justify-end px-4 pt-4">
              <button
                data-dropdown-toggle="dropdown"
                className="inline-block text-gray-500 dark:text-gray-400  rounded-lg text-sm p-1.5"
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>
              <div
                id="dropdown"
                className="z-10 hidden text-base list-none rounded-lg shadow w-44 dark:bg-gray-700"
              ></div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://picsum.photos/1000"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Chris Andersan
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Chuyên gia lĩnh vực Full Skill
              </span>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="w-full max-w-sm  border border-gray-200 rounded-lg shadow bgGiangVien">
            <div className="flex justify-end px-4 pt-4">
              <button
                data-dropdown-toggle="dropdown"
                className="inline-block text-gray-500 dark:text-gray-400  rounded-lg text-sm p-1.5"
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>
              <div
                id="dropdown"
                className="z-10 hidden text-base list-none rounded-lg shadow w-44 dark:bg-gray-700"
              ></div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://picsum.photos/1000"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                VueLo Gadi
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Chuyên gia lĩnh vực Phân tích
              </span>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="w-full max-w-sm  border border-gray-200 rounded-lg shadow bgGiangVien">
            <div className="flex justify-end px-4 pt-4">
              <button
                data-dropdown-toggle="dropdown"
                className="inline-block text-gray-500 dark:text-gray-400  rounded-lg text-sm p-1.5"
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>
              <div
                id="dropdown"
                className="z-10 hidden text-base list-none rounded-lg shadow w-44 dark:bg-gray-700"
              ></div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://picsum.photos/1000"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                IcarDi MenBor
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Chuyên gia ngôn ngữ Vue Js
              </span>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default GiangVien;
