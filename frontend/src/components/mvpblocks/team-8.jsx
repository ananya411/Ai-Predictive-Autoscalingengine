import { Linkedin, Github } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";

/* =====================
   ADVANCED ANIMATION VARIANTS
===================== */
const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.85, rotateX: -15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const imageVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.15,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.35,
    rotate: 15,
    transition: { type: "spring", stiffness: 400, damping: 12 },
  },
};

/* =====================
   DATA
===================== */
const dami_data = [
  {
    id: 1,
    name: "Ananya Jaiswal",
    role: "Frontend Developer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEeBhFiOs0ipA/profile-displayphoto-scale_200_200/B56ZjLBmtiHkAY-/0/1755752854282?e=1772668800&v=beta&t=elzSWwVc0v8y4C4Yy_ULjjxwiiGs70A45SJ6hqE4PRo",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/ananya-jaiswal-688b9a27b/",
      github: "https://github.com/ananya411",
    },
  },
  {
    id: 2,
    name: "Varnika Rathi",
    role: "Backend Developer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGoLSzXlFwstg/profile-displayphoto-scale_200_200/B56Zsy4FPvJ4Ac-/0/1766085148321?e=1772668800&v=beta&t=Hv0yMs3GBGE46vFg6NWam1fBKA_1iIw8YPMUEJOjpy0",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/varnikarathi/",
      github: "https://github.com/varnikarathi",
    },
  },
  {
    id: 3,
    name: "Anubhav Jaiswal",
    role: "UI/UX Designer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGYCOMrO__HwQ/profile-displayphoto-scale_200_200/B56ZgndXj7HMAc-/0/1753008669066?e=1772668800&v=beta&t=cqm72yDykFALrJ-s6pyu6Hs6tQu22P8-PSiQL59G9fE",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/anubhavxdev/",
      github: "https://github.com/anubhavxdev",
    },
  },
  {
    id: 4,
    name: "Gaurav Nayyar",
    role: "DevOps Engineer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQF35RnBB01ypA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708288419548?e=1772668800&v=beta&t=KfO7ueLUmcliNrRadop8BUVByWzWtt2mIfH0dllcmcI",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/nayyar-gaurav/",
      github: "https://github.com/FaithXDev",
    },
  },
];

export default function Team8() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0613] py-20 text-white">
      {/* Animated background glow */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(155,135,245,0.15), transparent 60%)",
        }}
      />

      <div className="container relative mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center text-4xl font-bold"
        >
          ARCHITECTS OF <br />
          <span className="bg-gradient-to-r from-[#9b87f5] via-white to-[#9b87f5] bg-clip-text text-transparent animate-pulse">
            CLOUD INTELLIGENCE
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {dami_data.map((member, index) => (
            <TiltCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================
   3D TILT CARD COMPONENT
===================== */
function TiltCard({ member, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [12, -12]);
  const rotateY = useTransform(x, [-50, 50], [-12, 12]);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ rotateX, rotateY }}
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      whileHover={{ scale: 1.05 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="group relative rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-xl"
    >
      {/* Animated border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-[#9b87f5]/40 via-transparent to-[#9b87f5]/40 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />

      <motion.div
        variants={imageVariants}
        initial="rest"
        whileHover="hover"
        className="relative mb-4 h-48 w-full overflow-hidden rounded-xl"
      >
        <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>

      <div className="mb-2 inline-block rounded-full bg-white/10 px-4 py-1 text-sm">
        {member.name}
      </div>
      <p className="text-white/60">{member.role}</p>

      <div className="mt-4 flex space-x-4">
        {member.socialMedia?.linkedin && (
          <motion.a
            variants={iconVariants}
            initial="rest"
            whileHover="hover"
            href={member.socialMedia.linkedin}
            className="text-white/40 hover:text-[#9b87f5]"
          >
            <Linkedin size={20} />
          </motion.a>
        )}
        {member.socialMedia?.github && (
          <motion.a
            variants={iconVariants}
            initial="rest"
            whileHover="hover"
            href={member.socialMedia.github}
            className="text-white/40 hover:text-white"
          >
            <Github size={20} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
