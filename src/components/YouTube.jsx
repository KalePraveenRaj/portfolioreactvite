function YouTube() {
  const videos = [
    { id: "ceV2V5lqm9M", title: "DeepSnap using DeepSeek API" },
    { id: "yMWbYOioDU4", title: "Printing Array Elements" },
    { id: "1qLxrQ-_g5w", title: "Hello World!" },
    { id: "qIEhHPTd0MY", title: "My Portfolio Website" },
    { id: "IYlzet7yPis", title: "FloatingIcon" },
    { id: "Egz6MOXl9jw", title: "Password Manager" },
    { id: "tlI58Wz49Kk", title: "CRUD Operations Backend" },
    { id:  "KTeIRGrUhJM",title:"Portfolio website"},
    { id:  "zmNNIMT5Y4Q",title:"Todo_App Flutter"},
    { id:  "6Vo6J1f1kaw",title:"Snakes and Ladder game using flutter"},
    { id:  "huUBZg-rqmo",title:"Expense Tracker application using flutter"},
  ];

  return (
    <section
      id="youtube"
      className="w-full bg-[rgb(27,37,61)] text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          YouTube Videos
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-center mb-16">
          Coding tutorials and project showcases.
        </p>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videos.map((video, index) => (
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noreferrer"
              className="
                group
                bg-[rgba(0,0,0,0.35)]
                rounded-2xl
                overflow-hidden
                shadow-[0_20px_40px_rgba(0,0,0,0.6)]
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_35px_70px_rgba(0,0,0,0.85)]
              "
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition group-hover:scale-110"
                />



                {/* Play Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-black/40
                    opacity-0
                    transition
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <svg
                    className="
                      w-16
                      h-16
                      text-white
                      transform
                      scale-90
                      transition
                      duration-300
                      group-hover:scale-110
                    "
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <div className="p-4 text-center">
                <p className="text-gray-300 font-medium transition group-hover:text-white">
                  {video.title}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          <a
            href="https://www.youtube.com/@kalepraveenraj"
            target="_blank"
            rel="noreferrer"
            className="
              px-6
              py-3
              bg-red-600
              text-white
              font-semibold
              rounded-lg
              hover:bg-red-500
              transition
            "
          >
            View More on YouTube
          </a>

          <a
            href="https://github.com/KalePraveenRaj"
            target="_blank"
            rel="noreferrer"
            className="
              px-6
              py-3
              border
              border-gray-400
              text-white
              font-semibold
              rounded-lg
              hover:bg-white
              hover:text-black
              transition
            "
          >
            GitHub Repo
          </a>
        </div>

      </div>
    </section>
  );
}

export default YouTube;
