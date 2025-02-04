"use client";

import { KeyboardEvent, useState } from "react";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    if (!description) {
      toast.error("请描述你想要生成的视频内容");
      return;
    }

    try {
      const params = {
        description: description,
      };
      const resp = await fetch("/api/gen-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
      const { code, message, data } = await resp.json();
      if (data) {
        toast.success("sora尚未开放，请耐心等待");
        router.push(`/video/${data.uuid}`);
      }
    } catch (e) {
      toast.error("视频生成失败");
      console.log("视频生成失败", e);
    }
  };

  const handleInputKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && !e.shiftKey) {
      if (e.keyCode !== 229) {
        e.preventDefault();
        handleSubmit();
      }
    }
  };

  return (
    <div className="mx-auto mt-6 flex max-w-md gap-x-4">
      <input
        type="text"
        required
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
        placeholder="sora尚未开放，请耐心等待"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={handleInputKeydown}
      />
      <button
        type="button"
        // className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        className="flex-none rounded-md bg-gray-300 px-3.5 py-2.5 text-sm font-semibold text-gray-500 shadow-sm cursor-not-allowed"
        onClick={handleSubmit}
        disabled={true}
      >
        生成视频
      </button>
    </div>
  );
}
