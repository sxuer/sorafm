import { respData, respErr } from "@/lib/resp";

import { getRandVideos } from "@/models/video";

export async function POST(req: Request) {
  try {
    const { description } = await req.json();
    if (!description) {
      return respErr("invalid params");
    }

    // todo: call openai sora api to generate video

    const videos = await getRandVideos(1, 1);
    if (videos.length === 0) {
      return respErr("视频生成失败");
    }

    return respData(videos[0]);
  } catch (e) {
    console.log("视频生成失败:", e);
    return respErr("视频生成失败");
  }
}
