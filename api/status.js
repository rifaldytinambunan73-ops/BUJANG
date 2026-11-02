
export default function handler(req, res) {
  const hasKey = Boolean(process.env.OPENAI_API_KEY?.trim());
  const hasPass = Boolean(process.env.APP_ACCESS_CODE?.trim());

  res.status(200).json({
    ready: hasKey && hasPass,
    message: hasKey && hasPass
      ? "Server AI siap digunakan."
      : "Konfigurasi API belum lengkap."
  });
}
