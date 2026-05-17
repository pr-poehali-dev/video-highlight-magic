import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

type Section = "home" | "upload" | "processing" | "gallery" | "editor" | "stats" | "settings" | "docs";

const NAV_ITEMS: { id: Section; label: string; icon: string }[] = [
  { id: "home", label: "Главная", icon: "Zap" },
  { id: "upload", label: "Загрузка", icon: "Upload" },
  { id: "processing", label: "Обработка", icon: "Cpu" },
  { id: "gallery", label: "Галерея", icon: "Film" },
  { id: "editor", label: "Редактор", icon: "Scissors" },
  { id: "stats", label: "Статистика", icon: "BarChart3" },
  { id: "settings", label: "Настройки", icon: "Settings" },
  { id: "docs", label: "Документация", icon: "BookOpen" },
];

function HomeSection() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="relative overflow-hidden rounded-xl glass-card p-10 scan-line grid-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-2 w-2 rounded-full bg-neon-cyan animate-pulse" />
            <span className="text-xs font-orbitron text-muted-foreground tracking-widest uppercase">Система активна</span>
          </div>
          <h1 className="font-orbitron text-4xl md:text-6xl font-black neon-text-cyan mb-2 leading-tight">
            NEX<span className="neon-text-purple">CUT</span>
          </h1>
          <p className="text-lg text-muted-foreground font-golos mb-6 max-w-xl">
            Платформа видеомонтажа нового поколения. ИИ анализирует, синхронизирует и создаёт — вы управляете.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="neon-btn-solid px-6 py-2.5 rounded-lg font-orbitron text-sm tracking-wide">
              НАЧАТЬ ПРОЕКТ
            </button>
            <button className="neon-btn px-6 py-2.5 rounded-lg font-orbitron text-sm tracking-wide">
              ДЕМО
            </button>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-neon-purple/5 blur-3xl" />
        <div className="absolute right-20 top-10 w-40 h-40 rounded-full bg-neon-cyan/5 blur-2xl" />
      </div>

      <div>
        <h2 className="font-orbitron text-sm tracking-widest text-muted-foreground uppercase mb-4">ИИ-Модули</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: "Eye", title: "Детектирование действий", desc: "ИИ распознаёт ключевые моменты, движения и события в кадре автоматически", color: "cyan" },
            { icon: "Music2", title: "Синхронизация музыки", desc: "Алгоритм анализирует ритм и автоматически подбирает монтажные точки под трек", color: "purple" },
            { icon: "Sparkles", title: "Подбор эффектов", desc: "Нейросеть предлагает визуальные эффекты, соответствующие жанру и настроению", color: "pink" },
          ].map((f, i) => (
            <div key={i} className="glass-card rounded-xl p-5 border transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                f.color === "cyan" ? "bg-neon-cyan/10 border border-neon-cyan/40" :
                f.color === "purple" ? "bg-neon-purple/10 border border-neon-purple/40" :
                "bg-[hsl(var(--neon-pink)/0.1)] border border-[hsl(var(--neon-pink)/0.4)]"
              }`}>
                <Icon name={f.icon} size={18} className={
                  f.color === "cyan" ? "text-neon-cyan" :
                  f.color === "purple" ? "text-neon-purple" :
                  "text-[hsl(var(--neon-pink))]"
                } />
              </div>
              <h3 className="font-orbitron text-sm font-bold mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Обработано видео", value: "2 847", unit: "файлов" },
          { label: "Сэкономлено времени", value: "340", unit: "часов" },
          { label: "ИИ-анализов", value: "18.4K", unit: "запросов" },
          { label: "Активных проектов", value: "12", unit: "сейчас" },
        ].map((s, i) => (
          <div key={i} className="glass-card rounded-xl p-4 border text-center">
            <div className="font-orbitron text-2xl font-black neon-text-cyan">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.unit}</div>
            <div className="text-xs text-muted-foreground/60 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="font-orbitron text-sm tracking-widest text-muted-foreground uppercase mb-4">Последние проекты</h2>
        <div className="space-y-2">
          {[
            { name: "SUMMER_REEL_2025.mp4", status: "готово", progress: 100, duration: "2:34" },
            { name: "SPORT_HIGHLIGHTS.mp4", status: "обработка", progress: 67, duration: "5:12" },
            { name: "CONCERT_CUT_V3.mp4", status: "очередь", progress: 0, duration: "8:05" },
          ].map((p, i) => (
            <div key={i} className="glass-card rounded-lg p-4 border flex items-center gap-4 hover:border-neon-cyan/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <Icon name="Film" size={16} className="text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-orbitron text-xs font-medium truncate text-foreground">{p.name}</span>
                  <span className="text-xs text-muted-foreground ml-2 flex-shrink-0">{p.duration}</span>
                </div>
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full progress-bar-neon rounded-full transition-all" style={{ width: `${p.progress}%` }} />
                </div>
              </div>
              <span className={`text-xs font-orbitron px-2 py-1 rounded flex-shrink-0 ${
                p.status === "готово" ? "text-neon-cyan bg-neon-cyan/10" :
                p.status === "обработка" ? "text-neon-purple bg-neon-purple/10" :
                "text-muted-foreground bg-muted"
              }`}>{p.status.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type UploadSource = "device" | "link" | "cloud";
type UploadPhase = "idle" | "downloading" | "rendering" | "done";
type DetectedMoment = { time: string; type: "action" | "music" | "effect"; label: string };

function detectSourcePlatform(url: string): string {
  const u = url.toLowerCase();
  if (u.includes("youtu")) return "YouTube";
  if (u.includes("vk.com") || u.includes("vkvideo")) return "VK";
  if (u.includes("rutube")) return "Rutube";
  if (u.includes("drive.google")) return "Google Drive";
  if (u.includes("disk.yandex") || u.includes("yadi.sk")) return "Яндекс Диск";
  if (u.includes("dropbox")) return "Dropbox";
  if (u.includes("tiktok")) return "TikTok";
  if (u.includes("vimeo")) return "Vimeo";
  return "Прямая ссылка";
}

function UploadSection() {
  const [dragging, setDragging] = useState(false);
  const [modalSource, setModalSource] = useState<UploadSource | null>(null);
  const [linkUrl, setLinkUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [phase, setPhase] = useState<UploadPhase>("idle");
  const [progress, setProgress] = useState(0);
  const [renderProgress, setRenderProgress] = useState(0);
  const [detectedMoments, setDetectedMoments] = useState<DetectedMoment[]>([]);
  const [activeJob, setActiveJob] = useState<{ name: string; platform: string; source: UploadSource } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const MOMENT_POOL: DetectedMoment[] = [
    { time: "00:08", type: "action", label: "Движение в кадре" },
    { time: "00:21", type: "music", label: "Сильная доля — точка монтажа" },
    { time: "00:34", type: "action", label: "Ключевой момент: смена ракурса" },
    { time: "00:47", type: "effect", label: "Уместен эффект: zoom-in" },
    { time: "01:12", type: "music", label: "Пик громкости — синхронизация" },
    { time: "01:28", type: "action", label: "Обнаружено лицо в кадре" },
    { time: "01:45", type: "effect", label: "Slow motion рекомендуется" },
    { time: "02:03", type: "music", label: "Дроп трека — резкий монтаж" },
    { time: "02:19", type: "action", label: "Быстрое движение объекта" },
    { time: "02:42", type: "effect", label: "Glitch transition подойдёт" },
    { time: "03:01", type: "music", label: "Смена ритма" },
    { time: "03:24", type: "action", label: "Эмоциональный момент" },
  ];

  const openModal = (source: UploadSource) => {
    if (phase !== "idle" && phase !== "done") return;
    setModalSource(source);
    setLinkUrl("");
    setSelectedFile(null);
    if (source === "device") {
      setTimeout(() => fileInputRef.current?.click(), 50);
    }
  };

  const closeModal = () => {
    if (phase === "downloading" || phase === "rendering") return;
    setModalSource(null);
    setLinkUrl("");
    setSelectedFile(null);
    if (phase === "done") {
      setPhase("idle");
      setProgress(0);
      setRenderProgress(0);
      setDetectedMoments([]);
      setActiveJob(null);
    }
  };

  const handleFilePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setSelectedFile(f);
  };

  const startJob = () => {
    if (!modalSource) return;
    let name = "video.mp4";
    let platform = "Локальный файл";
    if (modalSource === "device") {
      if (!selectedFile) { fileInputRef.current?.click(); return; }
      name = selectedFile.name;
      platform = "Устройство";
    } else {
      if (!linkUrl.trim()) return;
      platform = detectSourcePlatform(linkUrl);
      const m = linkUrl.match(/([^/?&=]+)$/);
      name = `${platform.toLowerCase().replace(/\s/g, "_")}_${(m?.[1] || "video").slice(0, 12)}.mp4`;
    }
    setActiveJob({ name, platform, source: modalSource });
    setPhase("downloading");
    setProgress(0);
    setRenderProgress(0);
    setDetectedMoments([]);
  };

  // Downloading animation
  useEffect(() => {
    if (phase !== "downloading") return;
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 6 + 2;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase("rendering"), 400);
          return 100;
        }
        return next;
      });
    }, 180);
    return () => clearInterval(interval);
  }, [phase]);

  // Rendering animation
  useEffect(() => {
    if (phase !== "rendering") return;
    let momentIdx = 0;
    const interval = setInterval(() => {
      setRenderProgress((p) => {
        const next = p + Math.random() * 3 + 1.5;
        const newProgress = Math.min(next, 100);
        const expectedMoments = Math.floor((newProgress / 100) * MOMENT_POOL.length);
        if (expectedMoments > momentIdx && momentIdx < MOMENT_POOL.length) {
          const toAdd = MOMENT_POOL.slice(momentIdx, expectedMoments);
          setDetectedMoments((prev) => [...prev, ...toAdd]);
          momentIdx = expectedMoments;
        }
        if (newProgress >= 100) {
          clearInterval(interval);
          setDetectedMoments(MOMENT_POOL);
          setTimeout(() => setPhase("done"), 500);
          return 100;
        }
        return newProgress;
      });
    }, 280);
    return () => clearInterval(interval);
  }, [phase]);

  const isProcessing = phase === "downloading" || phase === "rendering";

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-orbitron text-2xl font-bold neon-text-cyan mb-1">ЗАГРУЗКА ФАЙЛОВ</h1>
        <p className="text-muted-foreground text-sm">Поддерживаются MP4, MOV, AVI, MKV до 10 ГБ</p>
      </div>

      <div
        className={`rounded-xl border-2 border-dashed p-16 text-center transition-all duration-300 cursor-pointer ${dragging ? "border-neon-cyan bg-neon-cyan/5 scale-[1.01]" : "border-border hover:border-neon-cyan/50 hover:bg-neon-cyan/5 glass-card"}`}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          const f = e.dataTransfer.files?.[0];
          if (f) {
            setSelectedFile(f);
            setModalSource("device");
          }
        }}
        onClick={() => openModal("device")}
      >
        <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${dragging ? "bg-neon-cyan/20 border border-neon-cyan" : "bg-secondary border border-border"}`}>
          <Icon name="Upload" size={28} className={dragging ? "text-neon-cyan" : "text-muted-foreground"} />
        </div>
        <h3 className="font-orbitron text-lg font-bold mb-2 text-foreground">{dragging ? "Отпустите файл" : "Перетащите видео сюда"}</h3>
        <p className="text-muted-foreground text-sm mb-4">или нажмите для выбора файлов</p>
        <button className="neon-btn px-6 py-2 rounded-lg font-orbitron text-sm">ВЫБРАТЬ ФАЙЛЫ</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {([
          { source: "device" as UploadSource, icon: "HardDrive", title: "С устройства", desc: "Файлы с компьютера или телефона" },
          { source: "link" as UploadSource, icon: "Link", title: "По ссылке", desc: "YouTube, VK, Rutube, прямые ссылки" },
          { source: "cloud" as UploadSource, icon: "Cloud", title: "Облако", desc: "Google Drive, Яндекс Диск, Dropbox" },
        ]).map((o, i) => (
          <button
            key={i}
            onClick={() => openModal(o.source)}
            className="glass-card rounded-xl p-5 border hover:border-neon-cyan/40 transition-all cursor-pointer hover:scale-[1.02] text-left"
          >
            <Icon name={o.icon} size={20} className="text-neon-cyan mb-3" />
            <h4 className="font-orbitron text-sm font-bold mb-1">{o.title}</h4>
            <p className="text-xs text-muted-foreground">{o.desc}</p>
          </button>
        ))}
      </div>

      <input ref={fileInputRef} type="file" accept="video/*" className="hidden" onChange={handleFilePick} />

      {activeJob && (
        <div>
          <h2 className="font-orbitron text-xs tracking-widest text-muted-foreground uppercase mb-3">Последняя задача</h2>
          <div className="glass-card rounded-lg p-3 border flex items-center gap-3">
            <Icon name="FileVideo" size={16} className="text-neon-purple flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium truncate">{activeJob.name}</span>
                <span className="text-muted-foreground ml-2">{activeJob.platform}</span>
              </div>
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full progress-bar-neon rounded-full" style={{ width: phase === "done" ? "100%" : phase === "rendering" ? `${50 + renderProgress/2}%` : `${progress/2}%` }} />
              </div>
            </div>
            <span className="text-xs neon-text-cyan font-orbitron">
              {phase === "done" ? "ГОТОВО" : phase === "rendering" ? "РЕНДЕР" : phase === "downloading" ? "СКАЧИВАНИЕ" : ""}
            </span>
          </div>
        </div>
      )}

      {/* MODAL */}
      {modalSource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
          <div
            className="glass-card border border-neon-cyan/40 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-auto relative"
            style={{ boxShadow: "0 0 40px hsl(var(--neon-cyan)/0.3)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neon-cyan/15 border border-neon-cyan/40 flex items-center justify-center">
                  <Icon name={modalSource === "device" ? "HardDrive" : modalSource === "link" ? "Link" : "Cloud"} size={18} className="text-neon-cyan" />
                </div>
                <div>
                  <h2 className="font-orbitron text-sm font-bold neon-text-cyan tracking-wider">
                    {modalSource === "device" ? "ЗАГРУЗКА С УСТРОЙСТВА" : modalSource === "link" ? "ЗАГРУЗКА ПО ССЫЛКЕ" : "ЗАГРУЗКА ИЗ ОБЛАКА"}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {modalSource === "device" ? "Выберите файл с компьютера" : modalSource === "link" ? "YouTube, VK, Rutube, TikTok, Vimeo" : "Google Drive, Яндекс Диск, Dropbox"}
                  </p>
                </div>
              </div>
              {!isProcessing && (
                <button onClick={closeModal} className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                  <Icon name="X" size={16} />
                </button>
              )}
            </div>

            <div className="p-6 space-y-5">
              {phase === "idle" && (
                <>
                  {modalSource === "device" ? (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="rounded-xl border-2 border-dashed border-border hover:border-neon-cyan/60 hover:bg-neon-cyan/5 p-8 text-center cursor-pointer transition-all"
                    >
                      {selectedFile ? (
                        <>
                          <div className="w-12 h-12 rounded-xl mx-auto mb-3 bg-neon-cyan/20 border border-neon-cyan flex items-center justify-center">
                            <Icon name="FileVideo" size={22} className="text-neon-cyan" />
                          </div>
                          <p className="font-orbitron text-sm font-bold text-foreground truncate">{selectedFile.name}</p>
                          <p className="text-xs text-muted-foreground mt-1">{(selectedFile.size / 1024 / 1024).toFixed(1)} МБ</p>
                          <p className="text-xs text-neon-cyan mt-2">Нажмите, чтобы выбрать другой</p>
                        </>
                      ) : (
                        <>
                          <Icon name="Upload" size={32} className="text-muted-foreground mx-auto mb-3" />
                          <p className="font-orbitron text-sm text-foreground">Нажмите для выбора файла</p>
                          <p className="text-xs text-muted-foreground mt-1">MP4, MOV, AVI, MKV до 10 ГБ</p>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <label className="font-orbitron text-xs text-muted-foreground tracking-wider uppercase">
                        Вставьте ссылку
                      </label>
                      <div className="relative">
                        <Icon name="Link" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-cyan" />
                        <input
                          type="text"
                          autoFocus
                          value={linkUrl}
                          onChange={(e) => setLinkUrl(e.target.value)}
                          placeholder={modalSource === "link" ? "https://youtube.com/watch?v=..." : "https://drive.google.com/..."}
                          className="w-full bg-secondary border border-border focus:border-neon-cyan focus:outline-none rounded-lg pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground font-golos transition-colors"
                          style={{ boxShadow: linkUrl ? "0 0 12px hsl(var(--neon-cyan)/0.2)" : "none" }}
                        />
                      </div>
                      {linkUrl && (
                        <div className="flex items-center gap-2 text-xs animate-fade-in">
                          <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                          <span className="text-muted-foreground">Источник определён:</span>
                          <span className="font-orbitron text-neon-cyan">{detectSourcePlatform(linkUrl)}</span>
                        </div>
                      )}
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        {(modalSource === "link"
                          ? ["YouTube", "VK Video", "Rutube", "TikTok"]
                          : ["Google Drive", "Яндекс Диск", "Dropbox", "iCloud"]
                        ).map((s) => (
                          <div key={s} className="flex items-center gap-2 px-3 py-1.5 bg-secondary/60 rounded-md">
                            <div className="w-1 h-1 rounded-full bg-neon-purple" />
                            <span className="text-xs text-muted-foreground">{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={startJob}
                    disabled={modalSource === "device" ? !selectedFile : !linkUrl.trim()}
                    className="neon-btn-solid w-full py-3 rounded-lg font-orbitron text-sm tracking-wider disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:transform-none"
                  >
                    НАЧАТЬ
                  </button>
                </>
              )}

              {phase === "downloading" && activeJob && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-3 p-4 bg-neon-cyan/5 border border-neon-cyan/30 rounded-lg">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-2 border-neon-cyan/20" />
                      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-neon-cyan animate-spin" />
                      <Icon name="Download" size={16} className="text-neon-cyan" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-orbitron text-xs neon-text-cyan mb-0.5">СКАЧИВАНИЕ С {activeJob.platform.toUpperCase()}</div>
                      <div className="text-xs text-muted-foreground truncate">{activeJob.name}</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-muted-foreground">Прогресс</span>
                      <span className="font-orbitron neon-text-cyan">{Math.round(progress)}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full progress-bar-neon rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="p-2 bg-secondary/50 rounded">
                      <div className="text-muted-foreground/60">Скорость</div>
                      <div className="font-orbitron text-foreground">{(8 + Math.random() * 4).toFixed(1)} МБ/с</div>
                    </div>
                    <div className="p-2 bg-secondary/50 rounded">
                      <div className="text-muted-foreground/60">Размер</div>
                      <div className="font-orbitron text-foreground">{Math.round(progress * 8.4)} МБ</div>
                    </div>
                    <div className="p-2 bg-secondary/50 rounded">
                      <div className="text-muted-foreground/60">ETA</div>
                      <div className="font-orbitron text-foreground">{Math.max(1, Math.round((100 - progress) / 8))} c</div>
                    </div>
                  </div>
                </div>
              )}

              {phase === "rendering" && activeJob && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-3 p-4 bg-neon-purple/5 border border-neon-purple/40 rounded-lg scan-line">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-neon-purple/10 animate-pulse" />
                      <Icon name="Cpu" size={18} className="text-neon-purple" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-orbitron text-xs neon-text-purple mb-0.5">ИИ-АНАЛИЗ ВИДЕО</div>
                      <div className="text-xs text-muted-foreground truncate">Детектирование моментов и эффектов</div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-muted-foreground">Рендеринг</span>
                      <span className="font-orbitron neon-text-purple">{Math.round(renderProgress)}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${renderProgress}%`,
                          background: "linear-gradient(90deg, hsl(var(--neon-purple)), hsl(var(--neon-cyan)))",
                          boxShadow: "0 0 10px hsl(var(--neon-purple)/0.6)"
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="font-orbitron text-xs text-muted-foreground tracking-wider uppercase mb-2">
                      Обнаружено моментов: <span className="neon-text-cyan">{detectedMoments.length}</span>
                    </div>
                    <div className="space-y-1.5 max-h-48 overflow-auto pr-1">
                      {detectedMoments.map((m, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 rounded bg-secondary/40 border border-border animate-fade-in">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            m.type === "action" ? "bg-neon-cyan" : m.type === "music" ? "bg-neon-purple" : "bg-[hsl(var(--neon-pink))]"
                          }`} />
                          <span className="font-orbitron text-xs text-neon-cyan w-12">{m.time}</span>
                          <span className="text-xs text-muted-foreground flex-1 truncate">{m.label}</span>
                          <span className={`text-xs font-orbitron px-1.5 py-0.5 rounded ${
                            m.type === "action" ? "text-neon-cyan bg-neon-cyan/10" :
                            m.type === "music" ? "text-neon-purple bg-neon-purple/10" :
                            "text-[hsl(var(--neon-pink))] bg-[hsl(var(--neon-pink)/0.1)]"
                          }`}>
                            {m.type === "action" ? "ДЕЙСТВИЕ" : m.type === "music" ? "МУЗЫКА" : "ЭФФЕКТ"}
                          </span>
                        </div>
                      ))}
                      {detectedMoments.length === 0 && (
                        <div className="text-xs text-muted-foreground/60 text-center py-4">Сканирование начинается...</div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {phase === "done" && activeJob && (
                <div className="space-y-4 animate-fade-in text-center">
                  <div className="w-16 h-16 rounded-2xl mx-auto bg-neon-cyan/20 border border-neon-cyan flex items-center justify-center animate-glow-pulse">
                    <Icon name="CheckCircle2" size={28} className="text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-lg font-bold neon-text-cyan mb-1">ГОТОВО</h3>
                    <p className="text-sm text-muted-foreground">Видео обработано и готово к редактированию</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <div className="text-muted-foreground/60 mb-1">Действий</div>
                      <div className="font-orbitron text-lg neon-text-cyan">{MOMENT_POOL.filter(m => m.type === "action").length}</div>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <div className="text-muted-foreground/60 mb-1">Битов</div>
                      <div className="font-orbitron text-lg neon-text-purple">{MOMENT_POOL.filter(m => m.type === "music").length}</div>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <div className="text-muted-foreground/60 mb-1">Эффектов</div>
                      <div className="font-orbitron text-lg text-[hsl(var(--neon-pink))]">{MOMENT_POOL.filter(m => m.type === "effect").length}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={closeModal} className="neon-btn flex-1 py-2.5 rounded-lg font-orbitron text-xs">ЗАКРЫТЬ</button>
                    <button onClick={closeModal} className="neon-btn-solid flex-1 py-2.5 rounded-lg font-orbitron text-xs">ОТКРЫТЬ В РЕДАКТОРЕ</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProcessingSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-orbitron text-2xl font-bold neon-text-purple mb-1">ИИ-ОБРАБОТКА</h1>
        <p className="text-muted-foreground text-sm">Нейросеть анализирует видео в реальном времени</p>
      </div>
      <div className="glass-card rounded-xl p-6 border border-neon-purple/40 scan-line" style={{ boxShadow: "0 0 15px hsl(var(--neon-purple)/0.2)" }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-neon-purple animate-pulse" />
            <span className="font-orbitron text-sm font-bold neon-text-purple">АНАЛИЗ АКТИВЕН</span>
          </div>
          <span className="text-xs text-muted-foreground font-orbitron">ETA: 4:32</span>
        </div>
        <h3 className="font-orbitron text-sm mb-3 text-foreground">SPORT_HIGHLIGHTS.mp4</h3>
        <div className="space-y-3">
          {[
            { label: "Детектирование действий", progress: 87 },
            { label: "Синхронизация с музыкой", progress: 45 },
            { label: "Подбор эффектов", progress: 12 },
            { label: "Финальный рендер", progress: 0 },
          ].map((step, i) => (
            <div key={i}>
              <div className="flex justify-between text-xs mb-1">
                <span className={step.progress === 0 ? "text-muted-foreground" : "text-foreground"}>{step.label}</span>
                <span className={step.progress === 0 ? "text-muted-foreground" : "neon-text-purple font-orbitron"}>
                  {step.progress === 0 ? "ожидание" : `${step.progress}%`}
                </span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                {step.progress > 0 && (
                  <div className="h-full rounded-full" style={{ width: `${step.progress}%`, background: "linear-gradient(90deg, hsl(var(--neon-purple)), hsl(var(--neon-cyan)))", boxShadow: "0 0 8px hsl(var(--neon-purple)/0.6)" }} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: "Eye", title: "Детектор действий", model: "ActionNet v2.4", info: "30 FPS", status: "online", color: "cyan" },
          { icon: "Music2", title: "Музыкальный синтез", model: "BeatSync Pro", info: "Реальное время", status: "online", color: "purple" },
          { icon: "Sparkles", title: "Генератор эффектов", model: "FXGen Neural", info: "GPU ускорение", status: "standby", color: "pink" },
        ].map((m, i) => (
          <div key={i} className="glass-card rounded-xl p-5 border">
            <div className="flex items-start justify-between mb-3">
              <Icon name={m.icon} size={18} className={m.color === "cyan" ? "text-neon-cyan" : m.color === "purple" ? "text-neon-purple" : "text-[hsl(var(--neon-pink))]"} />
              <span className={`text-xs font-orbitron px-2 py-0.5 rounded ${m.status === "online" ? "bg-neon-cyan/10 text-neon-cyan" : "bg-muted text-muted-foreground"}`}>
                {m.status.toUpperCase()}
              </span>
            </div>
            <h4 className="font-orbitron text-xs font-bold mb-1">{m.title}</h4>
            <p className="text-xs text-muted-foreground">{m.model}</p>
            <p className="text-xs text-muted-foreground/60 mt-0.5">{m.info}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="font-orbitron text-xs tracking-widest text-muted-foreground uppercase mb-3">Очередь (3)</h2>
        <div className="space-y-2">
          {[
            { name: "vlog_final.mp4", duration: "12:30", task: "Полный анализ + эффекты" },
            { name: "promo_cut.mov", duration: "0:45", task: "Синхронизация музыки" },
            { name: "interview_raw.mp4", duration: "45:00", task: "Нарезка ключевых моментов" },
          ].map((q, i) => (
            <div key={i} className="glass-card rounded-lg p-3 border flex items-center gap-3">
              <span className="font-orbitron text-xs text-muted-foreground w-5 text-center">{i + 1}</span>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium truncate">{q.name}</div>
                <div className="text-xs text-muted-foreground">{q.task}</div>
              </div>
              <span className="text-xs text-muted-foreground font-orbitron">{q.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GallerySection() {
  const [filter, setFilter] = useState("all");
  const filters = ["all", "ролики", "клипы", "промо", "влоги"];
  const items = [
    { name: "Summer Reel 2025", duration: "2:34", views: "1.2K", tag: "ролики" },
    { name: "Concert Highlight", duration: "4:15", views: "890", tag: "клипы" },
    { name: "Product Promo V2", duration: "0:30", views: "5.4K", tag: "промо" },
    { name: "Travel Vlog #7", duration: "18:22", views: "432", tag: "влоги" },
    { name: "Sport Action Cut", duration: "5:12", views: "2.1K", tag: "ролики" },
    { name: "Brand Story", duration: "1:45", views: "3.8K", tag: "промо" },
  ];
  const filtered = filter === "all" ? items : items.filter(i => i.tag === filter);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-orbitron text-2xl font-bold neon-text-cyan mb-1">ГАЛЕРЕЯ ПРОЕКТОВ</h1>
        <p className="text-muted-foreground text-sm">Все готовые видео в одном месте</p>
      </div>
      <div className="flex gap-2 flex-wrap">
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} className={`px-4 py-1.5 rounded-lg font-orbitron text-xs uppercase tracking-wide transition-all ${filter === f ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/60" : "bg-secondary text-muted-foreground border border-border hover:border-neon-cyan/30"}`}>
            {f === "all" ? "ВСЕ" : f.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, i) => (
          <div key={i} className="glass-card rounded-xl overflow-hidden border hover:border-neon-cyan/40 transition-all hover:scale-[1.02] cursor-pointer group">
            <div className="aspect-video bg-gradient-to-br from-neon-purple/20 to-neon-cyan/10 relative grid-bg flex items-center justify-center">
              <Icon name="Play" size={32} className="text-neon-cyan opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <span className="absolute bottom-2 right-2 font-orbitron text-xs bg-black/60 text-foreground px-1.5 py-0.5 rounded">{item.duration}</span>
              <span className="absolute top-2 left-2 font-orbitron text-xs text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/30 px-1.5 py-0.5 rounded">{item.tag.toUpperCase()}</span>
            </div>
            <div className="p-4">
              <h3 className="font-orbitron text-sm font-bold mb-2 text-foreground">{item.name}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Icon name="Eye" size={12} />
                  <span>{item.views} просм.</span>
                </div>
                <div className="flex gap-1">
                  <button className="p-1 rounded hover:bg-neon-cyan/10 text-muted-foreground hover:text-neon-cyan transition-colors"><Icon name="Download" size={14} /></button>
                  <button className="p-1 rounded hover:bg-neon-purple/10 text-muted-foreground hover:text-neon-purple transition-colors"><Icon name="Share2" size={14} /></button>
                  <button className="p-1 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"><Icon name="Trash2" size={14} /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EditorSection() {
  const [activeTrack, setActiveTrack] = useState(0);
  return (
    <div className="space-y-4 animate-fade-in">
      <div>
        <h1 className="font-orbitron text-2xl font-bold neon-text-cyan mb-1">РЕДАКТОР</h1>
        <p className="text-muted-foreground text-sm">Тонкая настройка с ИИ-подсказками</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 glass-card rounded-xl overflow-hidden border aspect-video relative grid-bg flex items-center justify-center group">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-cyan/5" />
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center mx-auto mb-3 group-hover:bg-neon-cyan/20 transition-colors">
              <Icon name="Play" size={28} className="text-neon-cyan ml-1" />
            </div>
            <p className="font-orbitron text-xs text-muted-foreground">SPORT_HIGHLIGHTS.mp4</p>
          </div>
          <div className="absolute top-3 left-3 bg-black/60 px-2 py-1 rounded font-orbitron text-xs text-neon-cyan">00:02:14:08</div>
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="h-1 bg-muted rounded-full mb-3 relative cursor-pointer">
              <div className="h-full w-2/5 progress-bar-neon rounded-full" />
              <div className="absolute top-1/2 left-2/5 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neon-cyan border-2 border-background" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="text-muted-foreground hover:text-foreground transition-colors"><Icon name="SkipBack" size={18} /></button>
                <button className="w-9 h-9 rounded-full bg-neon-cyan/20 border border-neon-cyan flex items-center justify-center hover:bg-neon-cyan/40 transition-colors">
                  <Icon name="Play" size={16} className="text-neon-cyan ml-0.5" />
                </button>
                <button className="text-muted-foreground hover:text-foreground transition-colors"><Icon name="SkipForward" size={18} /></button>
                <span className="font-orbitron text-xs text-muted-foreground">02:14 / 05:12</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-muted-foreground hover:text-neon-cyan transition-colors"><Icon name="Volume2" size={16} /></button>
                <button className="text-muted-foreground hover:text-neon-cyan transition-colors"><Icon name="Maximize2" size={16} /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-card rounded-xl border p-4 space-y-4">
          <h3 className="font-orbitron text-xs font-bold neon-text-purple tracking-wider">ИИ-СОВЕТНИК</h3>
          <div className="space-y-2">
            {[
              { time: "00:34", text: "Ключевой момент: смена ракурса" },
              { time: "01:12", text: "Пик музыки — точка монтажа" },
              { time: "02:45", text: "Рекомендован эффект: slow motion" },
              { time: "04:01", text: "Обнаружено лицо в кадре" },
            ].map((hint, i) => (
              <div key={i} className="flex gap-2 p-2 rounded-lg bg-secondary/50 hover:bg-secondary cursor-pointer transition-colors">
                <span className="font-orbitron text-xs text-neon-cyan flex-shrink-0">{hint.time}</span>
                <span className="text-xs text-muted-foreground">{hint.text}</span>
              </div>
            ))}
          </div>
          <button className="neon-btn w-full py-2 rounded-lg font-orbitron text-xs">ПРИМЕНИТЬ ВСЁ</button>
        </div>
      </div>
      <div className="glass-card rounded-xl border p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-orbitron text-xs tracking-widest text-muted-foreground uppercase">Таймлайн</h3>
          <div className="flex gap-2">
            {["Видео", "Музыка", "Эффекты"].map((t, i) => (
              <button key={i} onClick={() => setActiveTrack(i)} className={`px-3 py-1 rounded text-xs font-orbitron transition-all ${activeTrack === i ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50" : "text-muted-foreground hover:text-foreground"}`}>
                {t.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {["Видео", "Аудио", "Эффекты"].map((track, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="font-orbitron text-xs text-muted-foreground w-14 flex-shrink-0">{track}</span>
              <div className="flex-1 h-8 bg-muted rounded-md relative overflow-hidden">
                {i === 0 && (<>
                  <div className="absolute left-0 top-0 bottom-0 w-2/5 bg-neon-cyan/20 border border-neon-cyan/30 rounded-md" />
                  <div className="absolute left-[43%] top-0 bottom-0 w-1/3 bg-neon-cyan/20 border border-neon-cyan/30 rounded-md" />
                </>)}
                {i === 1 && (
                  <div className="absolute inset-0 flex items-center px-2">
                    {Array.from({ length: 30 }).map((_, j) => (
                      <div key={j} className="flex-1 bg-neon-purple/40 mx-px rounded-full" style={{ height: `${20 + ((j * 37 + 13) % 80)}%` }} />
                    ))}
                  </div>
                )}
                {i === 2 && (
                  <div className="absolute left-[30%] top-1 bottom-1 w-12 bg-[hsl(var(--neon-pink)/0.2)] border border-[hsl(var(--neon-pink)/0.4)] rounded" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-orbitron text-2xl font-bold neon-text-cyan mb-1">СТАТИСТИКА</h1>
        <p className="text-muted-foreground text-sm">Аналитика и метрики платформы</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Видео обработано", value: "2 847", delta: "+127 этот месяц", icon: "Film", color: "cyan" },
          { label: "Часов сэкономлено", value: "340", delta: "+28 ч на этой неделе", icon: "Clock", color: "purple" },
          { label: "ИИ-анализов", value: "18.4K", delta: "+2.1K за 7 дней", icon: "Brain", color: "pink" },
          { label: "Место на диске", value: "847 ГБ", delta: "из 2 ТБ доступно", icon: "HardDrive", color: "orange" },
        ].map((kpi, i) => (
          <div key={i} className="glass-card rounded-xl p-5 border">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
              kpi.color === "cyan" ? "bg-neon-cyan/10" : kpi.color === "purple" ? "bg-neon-purple/10" : kpi.color === "pink" ? "bg-[hsl(var(--neon-pink)/0.1)]" : "bg-[hsl(var(--neon-orange)/0.1)]"
            }`}>
              <Icon name={kpi.icon} size={16} className={
                kpi.color === "cyan" ? "text-neon-cyan" : kpi.color === "purple" ? "text-neon-purple" : kpi.color === "pink" ? "text-[hsl(var(--neon-pink))]" : "text-[hsl(var(--neon-orange))]"
              } />
            </div>
            <div className="font-orbitron text-xl font-black text-foreground mb-1">{kpi.value}</div>
            <div className="text-xs text-muted-foreground/60 mb-1">{kpi.label}</div>
            <div className="text-xs text-neon-cyan">{kpi.delta}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="glass-card rounded-xl border p-5">
          <h3 className="font-orbitron text-xs text-muted-foreground uppercase tracking-widest mb-4">Активность за 7 дней</h3>
          <div className="flex items-end gap-2 h-32">
            {[45, 72, 38, 91, 56, 84, 67].map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-t-sm" style={{ height: `${v}%`, background: "linear-gradient(to top, hsl(var(--neon-cyan)), hsl(var(--neon-purple)))", boxShadow: "0 0 8px hsl(var(--neon-cyan)/0.4)" }} />
                <span className="text-xs text-muted-foreground font-orbitron">{["Пн","Вт","Ср","Чт","Пт","Сб","Вс"][i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card rounded-xl border p-5">
          <h3 className="font-orbitron text-xs text-muted-foreground uppercase tracking-widest mb-4">Использование ИИ-модулей</h3>
          <div className="space-y-3">
            {[
              { label: "Детектирование действий", pct: 78, color: "cyan" },
              { label: "Синхронизация музыки", pct: 61, color: "purple" },
              { label: "Подбор эффектов", pct: 43, color: "pink" },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className={`font-orbitron ${item.color === "cyan" ? "text-neon-cyan" : item.color === "purple" ? "text-neon-purple" : "text-[hsl(var(--neon-pink))]"}`}>{item.pct}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{
                    width: `${item.pct}%`,
                    background: item.color === "cyan" ? "hsl(var(--neon-cyan))" : item.color === "purple" ? "hsl(var(--neon-purple))" : "hsl(var(--neon-pink))",
                    boxShadow: `0 0 6px ${item.color === "cyan" ? "hsl(var(--neon-cyan))" : item.color === "purple" ? "hsl(var(--neon-purple))" : "hsl(var(--neon-pink))"}`
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-orbitron text-2xl font-bold neon-text-cyan mb-1">НАСТРОЙКИ</h1>
        <p className="text-muted-foreground text-sm">Конфигурация системы и ИИ-модулей</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="glass-card rounded-xl border p-5 space-y-4">
          <h3 className="font-orbitron text-sm font-bold neon-text-purple">ИИ-ПАРАМЕТРЫ</h3>
          {[
            { label: "Чувствительность детектора", value: 75 },
            { label: "Качество анализа музыки", value: 90 },
            { label: "Интенсивность эффектов", value: 60 },
          ].map((s, i) => (
            <div key={i}>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-muted-foreground">{s.label}</span>
                <span className="font-orbitron text-neon-cyan">{s.value}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full">
                <div className="h-full rounded-full progress-bar-neon" style={{ width: `${s.value}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="glass-card rounded-xl border p-5 space-y-4">
          <h3 className="font-orbitron text-sm font-bold neon-text-cyan">ЭКСПОРТ И РЕНДЕР</h3>
          <div className="space-y-3">
            {[
              { label: "Формат по умолчанию", value: "MP4 H.264" },
              { label: "Разрешение", value: "4K UHD" },
              { label: "Битрейт", value: "50 Мбит/с" },
              { label: "Кодировщик", value: "NVENC GPU" },
            ].map((s, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                <span className="text-sm text-muted-foreground">{s.label}</span>
                <span className="font-orbitron text-xs text-foreground bg-secondary px-2 py-1 rounded">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card rounded-xl border p-5 space-y-3">
          <h3 className="font-orbitron text-sm font-bold text-foreground">ФУНКЦИИ</h3>
          {[
            { label: "Автодетектирование действий", on: true },
            { label: "Автосинхронизация с музыкой", on: true },
            { label: "ИИ-рекомендации эффектов", on: true },
            { label: "Автосохранение проектов", on: false },
            { label: "Ночной режим рендера", on: false },
          ].map((t, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{t.label}</span>
              <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-all ${t.on ? "bg-neon-cyan/30 border border-neon-cyan" : "bg-muted border border-border"}`}>
                <div className={`w-3.5 h-3.5 rounded-full absolute top-0.5 transition-all ${t.on ? "left-5 bg-neon-cyan" : "left-0.5 bg-muted-foreground"}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="glass-card rounded-xl border p-5 space-y-4">
          <h3 className="font-orbitron text-sm font-bold text-foreground">АККАУНТ</h3>
          <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
            <div className="w-10 h-10 rounded-full bg-neon-cyan/20 border border-neon-cyan/40 flex items-center justify-center">
              <Icon name="User" size={18} className="text-neon-cyan" />
            </div>
            <div>
              <div className="font-orbitron text-sm font-bold">PRO АККАУНТ</div>
              <div className="text-xs text-muted-foreground">user@nexcut.io</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 neon-btn py-2 rounded-lg font-orbitron text-xs">ПРОФИЛЬ</button>
            <button className="flex-1 neon-btn py-2 rounded-lg font-orbitron text-xs">ТАРИФ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DocsSection() {
  const [open, setOpen] = useState<number | null>(0);
  const docs = [
    { title: "Быстрый старт", items: ["Загрузите видео через раздел Загрузка", "Выберите ИИ-модули для обработки", "Перейдите в Редактор для тонкой настройки", "Экспортируйте готовый проект"] },
    { title: "Детектирование действий", items: ["ActionNet v2.4 анализирует каждый кадр в реальном времени", "Распознаёт движения, жесты, смены ракурса", "Автоматически расставляет маркеры на таймлайне", "Настройка чувствительности в разделе Настройки"] },
    { title: "Синхронизация с музыкой", items: ["BeatSync Pro определяет BPM и ритмические паттерны", "Точки монтажа расставляются по долям такта", "Поддержка собственных треков и встроенной библиотеки", "Работает с форматами MP3, WAV, FLAC, AAC"] },
    { title: "ИИ-эффекты", items: ["FXGen Neural подбирает эффекты под жанр видео", "Библиотека 200+ пресетов и цветокоррекций", "Интеграция с LUT-файлами", "Пакетное применение эффектов к серии видео"] },
    { title: "Форматы и экспорт", items: ["Вход: MP4, MOV, AVI, MKV, WEBM до 10 ГБ", "Выход: MP4, MOV, WEBM, GIF", "Разрешение: до 8K UHD", "Прямой экспорт в YouTube, VK, Rutube"] },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-orbitron text-2xl font-bold neon-text-cyan mb-1">ДОКУМЕНТАЦИЯ</h1>
        <p className="text-muted-foreground text-sm">Руководства и справочные материалы</p>
      </div>
      <div className="space-y-2">
        {docs.map((doc, i) => (
          <div key={i} className="glass-card rounded-xl border overflow-hidden transition-all hover:border-neon-cyan/30">
            <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpen(open === i ? null : i)}>
              <span className="font-orbitron text-sm font-bold text-foreground">{doc.title}</span>
              <Icon name={open === i ? "ChevronUp" : "ChevronDown"} size={16} className={`transition-all ${open === i ? "text-neon-cyan" : "text-muted-foreground"}`} />
            </button>
            {open === i && (
              <div className="px-5 pb-5 space-y-2 border-t border-border pt-4">
                {doc.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-neon-cyan mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="glass-card rounded-xl border p-5 flex items-center justify-between">
        <div>
          <h3 className="font-orbitron text-sm font-bold mb-1">Нужна помощь?</h3>
          <p className="text-xs text-muted-foreground">Свяжитесь с командой поддержки</p>
        </div>
        <button className="neon-btn px-4 py-2 rounded-lg font-orbitron text-xs">ПОДДЕРЖКА</button>
      </div>
    </div>
  );
}

export default function Index() {
  const [active, setActive] = useState<Section>("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections: Record<Section, React.ReactNode> = {
    home: <HomeSection />,
    upload: <UploadSection />,
    processing: <ProcessingSection />,
    gallery: <GallerySection />,
    editor: <EditorSection />,
    stats: <StatsSection />,
    settings: <SettingsSection />,
    docs: <DocsSection />,
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-56 bg-[hsl(220_20%_5%)] border-r border-border flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:flex`}>
        <div className="p-5 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-neon-cyan/20 border border-neon-cyan/50 flex items-center justify-center animate-glow-pulse">
              <Icon name="Zap" size={14} className="text-neon-cyan" />
            </div>
            <span className="font-orbitron font-black text-lg neon-text-cyan tracking-wider">NEX<span className="neon-text-purple">CUT</span></span>
          </div>
          <p className="text-xs text-muted-foreground mt-1 font-golos">ИИ Видеомонтаж</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActive(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group ${
                active === item.id
                  ? "bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground border border-transparent"
              }`}
            >
              <Icon name={item.icon} size={16} className={active === item.id ? "text-neon-cyan" : "text-muted-foreground group-hover:text-foreground"} />
              <span className="font-orbitron text-xs font-medium tracking-wide">{item.label}</span>
              {active === item.id && <div className="ml-auto w-1 h-4 rounded-full bg-neon-cyan" />}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-border">
          <div className="p-3 bg-neon-cyan/5 border border-neon-cyan/20 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="font-orbitron text-xs text-neon-cyan">СИСТЕМА OK</span>
            </div>
            <div className="text-xs text-muted-foreground">GPU: 67% · RAM: 12 ГБ</div>
          </div>
        </div>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="flex-1 flex flex-col min-h-screen lg:min-w-0">
        <header className="h-14 border-b border-border bg-[hsl(220_20%_5%/0.8)] backdrop-blur-md flex items-center px-4 gap-3 sticky top-0 z-30">
          <button className="lg:hidden p-2 rounded-lg hover:bg-secondary text-muted-foreground" onClick={() => setSidebarOpen(true)}>
            <Icon name="Menu" size={18} />
          </button>
          <div className="flex items-center gap-2 flex-1">
            <Icon name={NAV_ITEMS.find(n => n.id === active)?.icon || "Zap"} size={14} className="text-neon-cyan" />
            <span className="font-orbitron text-xs tracking-widest text-muted-foreground uppercase">
              {NAV_ITEMS.find(n => n.id === active)?.label}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Bell" size={16} />
            </button>
            <button className="neon-btn-solid px-3 py-1.5 rounded-lg font-orbitron text-xs">+ НОВЫЙ</button>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div key={active}>{sections[active]}</div>
        </main>
      </div>
    </div>
  );
}