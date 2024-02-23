import Social from "../social";

export default function () {
  return (
    <section>
      <div className="w-screen flex-col bg-black px-6 py-20 text-white lg:flex lg:px-10 xl:px-24">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div>
            <a href="https://sora-ai.space" className="inline-block max-w-full">
              Sora-Ai.Space
            </a>
            <p className="font-inter mt-4 max-w-[350px] text-base font-light text-gray-500">
              Sora AI 视频生成器
            </p>
            <div className="mb-8 mt-6 flex flex-row">
              <Social />
            </div>
          </div>
          <div className="flex grow flex-row flex-wrap lg:mx-10 lg:flex-nowrap lg:justify-center">
            <div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <div className="font-inter font-medium">介绍</div>
              <a
                href="https://openai.com/sora"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                什么是 Sora
              </a>
              <a
                href="https://platform.openai.com/docs/overview"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora API
              </a>
              <a
                href="https://www.tiktok.com/@openai"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora 样例
              </a>
              <a
                href="https://platform.openai.com/docs/guides/prompt-engineering"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora 提示词
              </a>
            </div>
            <div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <div className="font-inter font-medium">友情链接</div>
              <a
                href="https://sora.fm/"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora.Fm
              </a>
            </div>
            <div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <div className="font-inter font-medium">赞赏</div>
              <a
                href="https://sora-ai.space"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora-Ai.Space
              </a>
            </div>
          </div>
          <div className="mt-10 flex flex-col lg:mt-0">
            <div className="mb-4 flex flex-col items-center">
              <p className="font-inter font-medium text-black"></p>
              <p className="font-inter ml-4 text-black">
                {/*进群二维码*/}
                <img
                  src={"/img/wxgroup.jpg"}
                  alt="qrcode"
                  width={"250"}
                  height={"400"}
                  className="rounded-md"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto my-12 w-full border border-gray-800 lg:my-20"></div>
        <div>
          <p className="font-inter lg: text-center text-sm text-gray-500">
            © Copyright 2024.{" "}
            <a href="https://sora-ai.space" target="_blank" className="text-primary">
              Sora-Ai.Space
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
