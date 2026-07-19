import {
  IconBrandWhatsapp,
  IconFileInvoice,
  IconPhoneCall,
} from "@tabler/icons-react"

export const navLinks = [
  {
    id: crypto.randomUUID(),
    label: "Home",
    href: "/",
  },
  {
    id: crypto.randomUUID(),
    label: "Tests",
    href: "/tests",
  },
  {
    id: crypto.randomUUID(),
    label: "Packages",
    href: "/packages",
  },
  {
    id: crypto.randomUUID(),
    label: "Blogs",
    href: "/blogs",
  },
  {
    id: crypto.randomUUID(),
    label: "Contact Us",
    href: "/contact-us",
  },
]

export const packagesLink = [
  {
    id: crypto.randomUUID(),
    label: "Silver",
    href: "/packages/silver",
  },
  {
    id: crypto.randomUUID(),
    label: "Gold",
    href: "/packages/gold",
  },
  {
    id: crypto.randomUUID(),
    label: "Diamond",
    href: "/packages/diamond",
  },
  {
    id: crypto.randomUUID(),
    label: "Platinum",
    href: "/packages/platinum",
  },
  {
    id: crypto.randomUUID(),
    label: "Signature",
    href: "/packages/signature",
  },
]

export const miniPackagesLink = [
  {
    id: crypto.randomUUID(),
    label: "Renal Pack",
    href: "/packages/mini-packages/renal-pack",
  },
  {
    id: crypto.randomUUID(),
    label: "Liver Pack",
    href: "/packages/mini-packages/liver-pack",
  },
  {
    id: crypto.randomUUID(),
    label: "Bone Pack",
    href: "/packages/mini-packages/bone-pack",
  },
  {
    id: crypto.randomUUID(),
    label: "Gut Pack",
    href: "/packages/mini-packages/gut-pack",
  },
  {
    id: crypto.randomUUID(),
    label: "Fever Pack",
    href: "/packages/mini-packages/fever-pack",
  },
  {
    id: crypto.randomUUID(),
    label: "Obesity Pack",
    href: "/packages/mini-packages/obesity-pack",
  },
  {
    id: crypto.randomUUID(),
    label: "Diabetic Pack",
    href: "/packages/mini-packages/diabetic-pack",
  },
  {
    id: crypto.randomUUID(),
    label: "Hypertension Pack",
    href: "/packages/mini-packages/hypertension-pack",
  },
  {
    id: crypto.randomUUID(),
    label: "Cardiac Pack",
    href: "/packages/mini-packages/cardiac-pack",
  },
]

export const packageIcons = [
  "/packages/1.svg",
  "/packages/2.svg",
  "/packages/3.svg",
  "/packages/4.svg",
  "/packages/5.svg",
  "/packages/6.svg",
  "/packages/7.svg",
  "/packages/8.svg",
  "/packages/9.svg",
  "/packages/10.svg",
  "/packages/11.svg",
  "/packages/12.svg",
  "/packages/13.svg",
  "/packages/14.svg",
]

export const featureItems = [
  {
    id: crypto.randomUUID(),
    title: "Talk to an Expert",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: (
      <IconPhoneCall className={"size-8 fill-orange-500 stroke-orange-300"} />
    ),
    bgColor: "bg-custom-5",
  },
  {
    id: crypto.randomUUID(),
    title: "Whatsapp Support",
    desc: "Chat with our support team for quick assistance.",
    icon: (
      <IconBrandWhatsapp className={"size-8 fill-green-400 stroke-olive-50"} />
    ),
    bgColor: "bg-custom-6",
  },
  {
    id: crypto.randomUUID(),
    title: "Upload Prescription",
    desc: "Upload your doctor's prescription and we'll recommend the right tests.",
    icon: (
      <IconFileInvoice className={"size-8 fill-blue-700 stroke-olive-50"} />
    ),
    bgColor: "bg-custom-7",
  },
]

export const healthPackages = [
  {
    id: crypto.randomUUID(),
    planName: "silver",
    features: ["61+ tests included", "Essential Check", "Report in 24 hrs"],
    originalPrice: "1599",
    discountedPrice: "1199",
    isPopular: false,
  },
  {
    id: crypto.randomUUID(),
    planName: "gold",
    features: ["79+ Tests Included", "Advanced Profilling", "Report in 24 hrs"],
    originalPrice: "3299",
    discountedPrice: "2499",
    isPopular: false,
  },
  {
    id: crypto.randomUUID(),
    planName: "diamond",
    features: ["90+ Tests Included", "Executive Screen", "Report in 24 hrs"],
    originalPrice: "3999",
    discountedPrice: "2999",
    isPopular: true,
  },
  {
    id: crypto.randomUUID(),
    planName: "platinum",
    features: ["110+ Tests Included", "Full Body Master", "Report in 24 hrs"],
    originalPrice: "4599",
    discountedPrice: "3499",
    isPopular: false,
  },
  {
    id: crypto.randomUUID(),
    planName: "signature",
    features: ["130+ Tests Included", "Elite Wellness", "Report in 24 hrs"],
    originalPrice: "5299",
    discountedPrice: "3999",
    isPopular: false,
  },
]

export const healthCategories = [
  {
    id: crypto.randomUUID(),
    title: "heart",
    img: "/health-category/1.png",
    href: "#",
  },
  {
    id: crypto.randomUUID(),
    title: "liver",
    img: "/health-category/2.png",
    href: "#",
  },
  {
    id: crypto.randomUUID(),
    title: "kidneys",
    img: "/health-category/3.png",
    href: "#",
  },
  {
    id: crypto.randomUUID(),
    title: "bone health",
    img: "/health-category/4.png",
    href: "#",
  },
  {
    id: crypto.randomUUID(),
    title: "hypertension",
    img: "/health-category/5.png",
    href: "#",
  },
  {
    id: crypto.randomUUID(),
    title: "diabetes",
    img: "/health-category/6.png",
    href: "#",
  },
  {
    id: crypto.randomUUID(),
    title: "gut health",
    img: "/health-category/7.png",
    href: "#",
  },
]

export const individualCategories = [
  {
    id: crypto.randomUUID(),
    title: "Complete Blood Count",
    desc: "24 parameters",
    originalPrice: "399",
    discountedPrice: "299",
  },
  {
    id: crypto.randomUUID(),
    title: "Throid Profile (T3, T4, TSH)",
    desc: "3 parameters",
    originalPrice: "799",
    discountedPrice: "599",
  },
  {
    id: crypto.randomUUID(),
    title: "HbA1c - Diabetes Check",
    desc: "1 parameter",
    originalPrice: "499",
    discountedPrice: "399",
  },
  {
    id: crypto.randomUUID(),
    title: "Vitamin D Total",
    desc: "1 parameter",
    originalPrice: "999",
    discountedPrice: "699",
  },
  {
    id: crypto.randomUUID(),
    title: "Lipid Profile",
    desc: "9 parameters",
    originalPrice: "599",
    discountedPrice: "499",
  },
]

export const bookingSteps = [
  {
    id: crypto.randomUUID(),
    title: "Choose a Test",
    desc: "Search from a wide range of diagnostic tests health packages.",
    icon: "/steps/step-1.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Schedule Your Appointment",
    desc: "Select your preferred date and time for sample collection.",
    icon: "/steps/step-2.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Sample Collection & Digital Reports",
    desc: "Our trained professionals collect samples at your doorstep and reports are delivered online.",
    icon: "/steps/step-3.png",
  },
]

export const whyChooseReasons = [
  {
    id: crypto.randomUUID(),
    text: "NABL & ICMR accredited partner labs",
  },
  {
    id: crypto.randomUUID(),
    text: "Free home sample collection, zero hidden fees",
  },
  {
    id: crypto.randomUUID(),
    text: "Reports in 12-24 hours via Whatsapp & email",
  },
  {
    id: crypto.randomUUID(),
    text: "Expert phlebotomists, safe & hygienic process",
  },
]

export const testimonies = [
  {
    id: crypto.randomUUID(),
    rating: 5,
    msg: "The phlebotomist arrived exactly on time. Reports were Whatsapped in under 12 hours. Absolutely seamless experience!",
    author: {
      name: "Priya S.",
      location: "Bangalore",
      avatar:
        "https://www.untitledui.com/images/avatars/ali-mahdi?w=288&h=288&q=75&fm=webp",
    },
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    msg: "Booked the Gold package for my parents. Entire process was smooth, professional and the staff was very courteous.",
    author: {
      name: "Rajesh M.",
      location: "Bangalore",
      avatar:
        "https://www.untitledui.com/images/avatars/ali-mahdi?w=288&h=288&q=75&fm=webp",
    },
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    msg: "Best diagnostic service. NABL certified, accurate results, and truly free home collection, Will use again!",
    author: {
      name: "Anita K.",
      location: "Bangalore",
      avatar:
        "https://www.untitledui.com/images/avatars/ali-mahdi?w=288&h=288&q=75&fm=webp",
    },
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    msg: "Highly recommended for accurate diagnostic and grest customer support.",
    author: {
      name: "Amit K.",
      location: "Bangalore",
      avatar:
        "https://www.untitledui.com/images/avatars/ali-mahdi?w=288&h=288&q=75&fm=webp",
    },
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    msg: "The phlebotomist arrived exactly on time. Reports were Whatsapped in under 12 hours. Absolutely seamless experience!",
    author: {
      name: "Priya S.",
      location: "Bangalore",
      avatar:
        "https://www.untitledui.com/images/avatars/ali-mahdi?w=288&h=288&q=75&fm=webp",
    },
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    msg: "Booked the Gold package for my parents. Entire process was smooth, professional and the staff was very courteous.",
    author: {
      name: "Rajesh M.",
      location: "Bangalore",
      avatar:
        "https://www.untitledui.com/images/avatars/ali-mahdi?w=288&h=288&q=75&fm=webp",
    },
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    msg: "Best diagnostic service. NABL certified, accurate results, and truly free home collection, Will use again!",
    author: {
      name: "Anita K.",
      location: "Bangalore",
      avatar:
        "https://www.untitledui.com/images/avatars/ali-mahdi?w=288&h=288&q=75&fm=webp",
    },
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    msg: "Highly recommended for accurate diagnostic and grest customer support.",
    author: {
      name: "Amit K.",
      location: "Bangalore",
      avatar:
        "https://www.untitledui.com/images/avatars/ali-mahdi?w=288&h=288&q=75&fm=webp",
    },
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    msg: "The phlebotomist arrived exactly on time. Reports were Whatsapped in under 12 hours. Absolutely seamless experience!",
    author: {
      name: "Priya S.",
      location: "Bangalore",
      avatar:
        "https://www.untitledui.com/images/avatars/ali-mahdi?w=288&h=288&q=75&fm=webp",
    },
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    msg: "Booked the Gold package for my parents. Entire process was smooth, professional and the staff was very courteous.",
    author: {
      name: "Rajesh M.",
      location: "Bangalore",
      avatar:
        "https://www.untitledui.com/images/avatars/ali-mahdi?w=288&h=288&q=75&fm=webp",
    },
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    msg: "Best diagnostic service. NABL certified, accurate results, and truly free home collection, Will use again!",
    author: {
      name: "Anita K.",
      location: "Bangalore",
      avatar:
        "https://www.untitledui.com/images/avatars/ali-mahdi?w=288&h=288&q=75&fm=webp",
    },
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    msg: "Highly recommended for accurate diagnostic and grest customer support.",
    author: {
      name: "Amit K.",
      location: "Bangalore",
      avatar:
        "https://www.untitledui.com/images/avatars/ali-mahdi?w=288&h=288&q=75&fm=webp",
    },
  },
]

export const howItWorks = [
  {
    id: crypto.randomUUID(),
    title: "book online",
    desc: "Book via Whatsapp or our Website in under 2 minutes.",
    cover: "/how-it-works/1.png",
    coverColor: "bg-custom-1",
    stepName: "book",
  },
  {
    id: crypto.randomUUID(),
    title: "free home collection",
    desc: "A certified phiebotomist visits your doorstep, hygienic and on time.",
    cover: "/how-it-works/2.png",
    coverColor: "bg-custom-2",
    stepName: "collect",
  },
  {
    id: crypto.randomUUID(),
    title: "advanced lav analysis",
    desc: "your sample is analysed using advanced technology and strict quality checks.",
    cover: "/how-it-works/3.png",
    coverColor: "bg-custom-3",
    stepName: "analyze",
  },
  {
    id: crypto.randomUUID(),
    title: "get reports in 24 hrs",
    desc: "NABL certified results delivered directly to your phone and email.",
    cover: "/how-it-works/4.png",
    coverColor: "bg-custom-4",
    stepName: "report",
  },
]

export const blogs = [
  {
    id: crypto.randomUUID(),
    title: "10 Simple Habits for a Healthier You",
    cover: "/blogs/1.png",
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam in quaerat porro, accusantium nostrum possimus. Hic molestias mollitia dicta iure consectetur corporis assumenda harum magnam modi. Animi debitis ullam velit.
    Recusandae, est deserunt! Suscipit magni harum tempora sed inventore nisi? Fugit amet eius eum enim quaerat ipsum deserunt earum nisi porro blanditiis corporis nobis, odit ut sed tenetur delectus neque!
    Sapiente eaque perferendis temporibus, laudantium odit nam? Perferendis doloribus provident vel harum impedit labore officia? A necessitatibus placeat doloremque rem ratione libero, sequi ex delectus facere hic modi, magnam accusamus.
    Neque voluptatibus, saepe consequuntur, reiciendis laboriosam totam excepturi, quos repellat praesentium necessitatibus commodi aliquid mollitia magnam accusantium? Soluta ducimus, fugiat reprehenderit quod aut provident officia eligendi culpa cum iusto at?
    Accusantium amet dolores quisquam asperiores error consequatur tenetur totam recusandae quibusdam nihil distinctio, ea doloribus quas delectus, numquam, dolorum accusamus! Animi voluptatum inventore deserunt incidunt est nihil debitis quod impedit.
    Sit odit quasi dolor tenetur totam. Magnam repudiandae, error incidunt delectus excepturi dolorem dolorum facere dolor veniam culpa aliquam officia a nobis similique. Aliquam, quo fugiat quisquam fugit architecto suscipit?
    Laborum id odit mollitia suscipit repellat quaerat veritatis aliquam omnis fugiat corrupti, nostrum saepe, autem iure, rem placeat inventore aspernatur corporis dolorum. Cum quia quo similique dolor, eligendi deserunt impedit.
    Veritatis nulla ad quos tenetur commodi, perspiciatis dolor, saepe, quod totam sit sunt porro officiis? Harum eaque quisquam nam perferendis fuga beatae, eveniet necessitatibus nobis amet corrupti dolorum! Reiciendis, facere!
    Dignissimos ex illo aut hic perspiciatis autem temporibus ab sequi distinctio atque assumenda placeat tempore suscipit, reprehenderit possimus consequatur dolores omnis porro! Minus distinctio dolorem modi sapiente natus repellat sed?
    Debitis, beatae suscipit assumenda laudantium officia quas repellendus id necessitatibus molestiae doloremque harum voluptate expedita soluta temporibus ipsa facilis optio fuga sunt itaque iure natus ut quidem minima? Recusandae, maxime?
    Incidunt est, molestias cumque temporibus dignissimos sint. Corporis placeat, distinctio quidem error recusandae quaerat doloribus eius amet at quae cumque debitis illo vero consectetur ut ducimus ad illum inventore vitae.
    Distinctio cumque et nam mollitia ratione qui, facere labore! Saepe molestias at recusandae quia quibusdam ratione, iste dicta quo quidem nihil? Repellat necessitatibus ducimus, quisquam voluptatum dolorum ad totam culpa!
    Explicabo nihil, ullam a accusantium consequatur repudiandae sequi distinctio eveniet qui saepe, labore eum aliquid eius voluptate earum doloribus? Tempore numquam illum perferendis voluptatibus autem veniam velit totam voluptates odio!
    Maxime, nulla? Sapiente nam libero asperiores illum necessitatibus, eveniet placeat fuga amet totam perferendis reprehenderit! Consectetur vero minus nostrum eius quasi, tempora illo porro facere nihil ipsam tenetur quidem culpa?
    Voluptas, facilis eum! Repellat impedit perspiciatis, laudantium dolorum dicta numquam eum error voluptatum distinctio obcaecati? Soluta quidem eum, suscipit expedita sint hic ipsam quasi ullam consequuntur placeat sunt laudantium maiores!
    Placeat nisi beatae corporis, voluptatum fugiat quae deserunt et dolor, vero neque doloribus ea, animi commodi necessitatibus fugit quaerat ut? Omnis quidem voluptatibus fugiat neque saepe expedita iste minus quae.
    Quis magni ut id molestiae aliquid dolores exercitationem repudiandae quod error voluptatem cum ex accusantium provident facere asperiores cupiditate culpa magnam, totam est fugit, aspernatur temporibus officia? Perspiciatis, dolore impedit!
    Rerum nemo quas molestias iste eaque nesciunt beatae. Numquam voluptate, vitae laboriosam maiores voluptates velit quasi perspiciatis iusto quis error praesentium nulla debitis, esse ratione quo earum maxime dicta temporibus?
    Voluptatibus doloribus, dolores expedita iure eum recusandae praesentium sunt officiis voluptatem eaque soluta! Magnam placeat numquam odio accusantium expedita esse, deleniti neque voluptate iure quaerat. Optio similique expedita qui officia!
    Dolorem, deserunt officiis earum cumque impedit adipisci unde temporibus ex. Eaque cumque exercitationem odio explicabo sunt consequuntur optio qui reiciendis iure, nisi beatae facilis quaerat quas deleniti vitae suscipit laudantium.
    Corporis voluptatibus sit aperiam laborum itaque quo voluptatum saepe accusantium magnam consequuntur inventore iure assumenda, vitae commodi veniam blanditiis officiis enim repellendus earum beatae. Quasi, sequi officiis? Blanditiis, maiores nobis!
    Commodi ullam accusamus, harum ut, magni nulla doloremque, sapiente suscipit possimus nam molestias aspernatur at? Ab magnam ea amet autem repudiandae beatae, animi optio facilis! Asperiores aperiam tempore debitis dicta?
    Fuga ex vitae, accusantium ea nam tempora, autem dolor esse sequi repudiandae dolores soluta quia. Obcaecati reiciendis, eveniet amet possimus nostrum hic a, corrupti error, ipsa nam expedita ipsam veniam?
    Iste cum voluptates sint, exercitationem tempore veniam. Minima, magni cumque temporibus quia beatae eius quas ipsa dicta at, nulla tempora reprehenderit itaque, ipsam delectus architecto. At quae laborum ipsam esse?
    Non, in. Ducimus illo ut quaerat perferendis facere magnam corrupti deleniti dolorum sequi similique eveniet sapiente molestiae labore veniam voluptas repellendus, corporis praesentium qui mollitia quasi placeat ipsa, repudiandae aperiam?
    Repellat, eos recusandae? Totam tempore dolores quae aperiam enim iusto ad vel, quas recusandae, possimus corrupti itaque ipsam. Natus repudiandae placeat eaque mollitia cupiditate, consectetur fugiat! Neque cupiditate aliquam sint?
    Dolorem, omnis accusantium sapiente rerum recusandae, quos tenetur labore soluta dolore placeat deleniti similique necessitatibus velit et ab architecto? Necessitatibus neque officiis nihil suscipit enim error veniam sapiente nemo fuga.
    Vel labore reprehenderit earum aliquam, repudiandae asperiores blanditiis esse nulla distinctio ut aliquid nisi eveniet adipisci corrupti ab necessitatibus cumque fugit autem soluta accusantium provident numquam, harum dolor! Cumque, iure.
    Dolorum, nemo voluptatibus culpa excepturi quas unde quidem, recusandae iusto dolorem fuga eum repudiandae quis magnam veniam iste veritatis, illum iure eos. Consequuntur, sapiente enim mollitia facilis sed distinctio ea.
    Rerum id quod illum sint laboriosam nobis voluptatem dolorem eum in, eligendi consequuntur qui debitis aliquam dicta quidem voluptates nostrum enim, blanditiis asperiores veniam eius? Adipisci esse voluptates odit mollitia!
    Ipsa asperiores earum temporibus, cupiditate sint ex reiciendis tempora harum accusamus, id consequatur quo, molestiae velit delectus repellat perspiciatis voluptatum nemo. Blanditiis praesentium, quia magni alias minus saepe architecto perferendis!
    Magnam nobis quam ab rem aliquid doloremque suscipit sed quaerat mollitia, aspernatur qui quae totam eligendi sit debitis eum velit iure maxime. Tenetur, obcaecati. Blanditiis a suscipit facilis nihil iure!
    Facere, sit. Impedit corporis vitae nulla odit nemo neque illum error quasi, alias ea aspernatur sint non nobis illo sapiente, exercitationem recusandae delectus blanditiis ex harum amet. Quam, molestias dolore?
    Quisquam distinctio esse ullam consequuntur harum! Molestias explicabo tenetur ut dolorum expedita eius maxime nihil, natus vel facere sed! Recusandae velit quae incidunt asperiores expedita inventore at aliquid error voluptas.
    Molestiae quam aliquid at asperiores cum, ullam reprehenderit ducimus voluptates optio minus voluptate. Ullam facilis eligendi iusto distinctio velit asperiores consequatur quia accusamus, animi voluptatem delectus facere quas ad temporibus.
    Dicta ratione molestias vel quod! Consequatur quae delectus ullam ipsa numquam nobis quia vero in perspiciatis animi, enim accusamus neque iusto deleniti illum quisquam alias ipsum temporibus, pariatur nihil quam!
    Repudiandae libero ratione cupiditate aperiam sunt cumque neque impedit, voluptates culpa doloribus eos, quo illum quibusdam sit velit voluptatum excepturi laboriosam dolorum reprehenderit assumenda quaerat quis iste ea. Nam, officia?
    Rem nulla et illum recusandae obcaecati. Libero modi illo, est sapiente quos debitis, recusandae tenetur magnam aspernatur architecto error. Odio quod dolorem, ut nisi ipsum ipsa nostrum earum iusto iure.
    Provident iure minus voluptatem inventore facilis ipsum nisi? A veritatis culpa nemo earum, animi minus non, aliquam neque dolores quae accusantium fugiat praesentium itaque. Ex ullam blanditiis fugit laboriosam quos.
    Doloribus, illo voluptatibus magnam vero, deleniti, veniam aspernatur commodi laborum delectus laudantium eveniet nulla esse ab corporis ea minima! Voluptatem, illo? Repellat rerum impedit maxime voluptate! Corporis temporibus incidunt ratione?
    Dolorem quas quam maxime? Sed, quasi? Tempore blanditiis ea reiciendis, minima sunt veritatis accusamus, impedit eius laboriosam, expedita temporibus voluptates vitae. Nihil explicabo ex dolorem voluptatem ab corrupti officiis illo!
    Soluta veniam inventore sapiente dolorum non, ut, fugiat minima molestiae quae reprehenderit sunt unde ipsam voluptatem nam tempora ducimus quidem, et voluptatibus. Dicta architecto beatae ea quas ut, eos vitae?
    Eos nisi omnis similique iste optio doloremque, delectus voluptatum explicabo aut ab perferendis tempora nemo autem quo, architecto cumque? Dolorem optio molestias sunt dignissimos eius deserunt animi corrupti iure vel.
    Esse facilis minus labore aliquid autem doloribus nisi quod magnam expedita, accusamus tempore atque alias rerum perferendis consequuntur nihil totam dignissimos? Adipisci natus pariatur esse earum corrupti delectus aspernatur cumque!
    Vitae incidunt laboriosam sapiente repellat alias in totam, harum repellendus quod quis eius nobis iure veritatis deserunt consectetur sequi culpa quas quibusdam, magnam fugit maiores. Minus perspiciatis consequuntur voluptatem dolore!
    Voluptatum odio consequuntur eos, exercitationem omnis provident corrupti et veniam sed ipsa magnam odit at voluptatibus saepe quibusdam nostrum quam blanditiis magni officia ratione aut consequatur? Minus tenetur facere repellat.
    Animi magnam debitis id, est autem, natus blanditiis, laudantium deleniti temporibus explicabo dignissimos velit et corporis enim molestiae non nobis at quod quae recusandae nostrum? Eligendi obcaecati commodi aspernatur distinctio?
    Excepturi saepe aperiam eius vero molestiae laborum deserunt incidunt odit soluta autem expedita aut, iste distinctio ad, in fugit voluptatibus. Eveniet architecto eum, earum tenetur expedita tempore at quos. Reprehenderit.
    Quae culpa exercitationem doloremque quod accusamus adipisci! Labore vero laborum ullam pariatur, molestias assumenda eius inventore perferendis at consectetur, sapiente expedita nemo enim sit ea, tempora sed eaque sequi fugiat?
    Natus, cupiditate dicta aperiam debitis exercitationem libero, eveniet odio vel possimus optio odit quo deserunt perferendis aliquid in, necessitatibus repellat cum quasi culpa modi dignissimos. Ab natus enim sed sequi!`,
    date: "1747755289752",
  },
  {
    id: crypto.randomUUID(),
    title: "Importance of Vitamin D for Your Body",
    cover: "/blogs/2.png",
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam in quaerat porro, accusantium nostrum possimus. Hic molestias mollitia dicta iure consectetur corporis assumenda harum magnam modi. Animi debitis ullam velit.
    Recusandae, est deserunt! Suscipit magni harum tempora sed inventore nisi? Fugit amet eius eum enim quaerat ipsum deserunt earum nisi porro blanditiis corporis nobis, odit ut sed tenetur delectus neque!
    Sapiente eaque perferendis temporibus, laudantium odit nam? Perferendis doloribus provident vel harum impedit labore officia? A necessitatibus placeat doloremque rem ratione libero, sequi ex delectus facere hic modi, magnam accusamus.
    Neque voluptatibus, saepe consequuntur, reiciendis laboriosam totam excepturi, quos repellat praesentium necessitatibus commodi aliquid mollitia magnam accusantium? Soluta ducimus, fugiat reprehenderit quod aut provident officia eligendi culpa cum iusto at?
    Accusantium amet dolores quisquam asperiores error consequatur tenetur totam recusandae quibusdam nihil distinctio, ea doloribus quas delectus, numquam, dolorum accusamus! Animi voluptatum inventore deserunt incidunt est nihil debitis quod impedit.
    Sit odit quasi dolor tenetur totam. Magnam repudiandae, error incidunt delectus excepturi dolorem dolorum facere dolor veniam culpa aliquam officia a nobis similique. Aliquam, quo fugiat quisquam fugit architecto suscipit?
    Laborum id odit mollitia suscipit repellat quaerat veritatis aliquam omnis fugiat corrupti, nostrum saepe, autem iure, rem placeat inventore aspernatur corporis dolorum. Cum quia quo similique dolor, eligendi deserunt impedit.
    Veritatis nulla ad quos tenetur commodi, perspiciatis dolor, saepe, quod totam sit sunt porro officiis? Harum eaque quisquam nam perferendis fuga beatae, eveniet necessitatibus nobis amet corrupti dolorum! Reiciendis, facere!
    Dignissimos ex illo aut hic perspiciatis autem temporibus ab sequi distinctio atque assumenda placeat tempore suscipit, reprehenderit possimus consequatur dolores omnis porro! Minus distinctio dolorem modi sapiente natus repellat sed?
    Debitis, beatae suscipit assumenda laudantium officia quas repellendus id necessitatibus molestiae doloremque harum voluptate expedita soluta temporibus ipsa facilis optio fuga sunt itaque iure natus ut quidem minima? Recusandae, maxime?
    Incidunt est, molestias cumque temporibus dignissimos sint. Corporis placeat, distinctio quidem error recusandae quaerat doloribus eius amet at quae cumque debitis illo vero consectetur ut ducimus ad illum inventore vitae.
    Distinctio cumque et nam mollitia ratione qui, facere labore! Saepe molestias at recusandae quia quibusdam ratione, iste dicta quo quidem nihil? Repellat necessitatibus ducimus, quisquam voluptatum dolorum ad totam culpa!
    Explicabo nihil, ullam a accusantium consequatur repudiandae sequi distinctio eveniet qui saepe, labore eum aliquid eius voluptate earum doloribus? Tempore numquam illum perferendis voluptatibus autem veniam velit totam voluptates odio!
    Maxime, nulla? Sapiente nam libero asperiores illum necessitatibus, eveniet placeat fuga amet totam perferendis reprehenderit! Consectetur vero minus nostrum eius quasi, tempora illo porro facere nihil ipsam tenetur quidem culpa?
    Voluptas, facilis eum! Repellat impedit perspiciatis, laudantium dolorum dicta numquam eum error voluptatum distinctio obcaecati? Soluta quidem eum, suscipit expedita sint hic ipsam quasi ullam consequuntur placeat sunt laudantium maiores!
    Placeat nisi beatae corporis, voluptatum fugiat quae deserunt et dolor, vero neque doloribus ea, animi commodi necessitatibus fugit quaerat ut? Omnis quidem voluptatibus fugiat neque saepe expedita iste minus quae.
    Quis magni ut id molestiae aliquid dolores exercitationem repudiandae quod error voluptatem cum ex accusantium provident facere asperiores cupiditate culpa magnam, totam est fugit, aspernatur temporibus officia? Perspiciatis, dolore impedit!
    Rerum nemo quas molestias iste eaque nesciunt beatae. Numquam voluptate, vitae laboriosam maiores voluptates velit quasi perspiciatis iusto quis error praesentium nulla debitis, esse ratione quo earum maxime dicta temporibus?
    Voluptatibus doloribus, dolores expedita iure eum recusandae praesentium sunt officiis voluptatem eaque soluta! Magnam placeat numquam odio accusantium expedita esse, deleniti neque voluptate iure quaerat. Optio similique expedita qui officia!
    Dolorem, deserunt officiis earum cumque impedit adipisci unde temporibus ex. Eaque cumque exercitationem odio explicabo sunt consequuntur optio qui reiciendis iure, nisi beatae facilis quaerat quas deleniti vitae suscipit laudantium.
    Corporis voluptatibus sit aperiam laborum itaque quo voluptatum saepe accusantium magnam consequuntur inventore iure assumenda, vitae commodi veniam blanditiis officiis enim repellendus earum beatae. Quasi, sequi officiis? Blanditiis, maiores nobis!
    Commodi ullam accusamus, harum ut, magni nulla doloremque, sapiente suscipit possimus nam molestias aspernatur at? Ab magnam ea amet autem repudiandae beatae, animi optio facilis! Asperiores aperiam tempore debitis dicta?
    Fuga ex vitae, accusantium ea nam tempora, autem dolor esse sequi repudiandae dolores soluta quia. Obcaecati reiciendis, eveniet amet possimus nostrum hic a, corrupti error, ipsa nam expedita ipsam veniam?
    Iste cum voluptates sint, exercitationem tempore veniam. Minima, magni cumque temporibus quia beatae eius quas ipsa dicta at, nulla tempora reprehenderit itaque, ipsam delectus architecto. At quae laborum ipsam esse?
    Non, in. Ducimus illo ut quaerat perferendis facere magnam corrupti deleniti dolorum sequi similique eveniet sapiente molestiae labore veniam voluptas repellendus, corporis praesentium qui mollitia quasi placeat ipsa, repudiandae aperiam?
    Repellat, eos recusandae? Totam tempore dolores quae aperiam enim iusto ad vel, quas recusandae, possimus corrupti itaque ipsam. Natus repudiandae placeat eaque mollitia cupiditate, consectetur fugiat! Neque cupiditate aliquam sint?
    Dolorem, omnis accusantium sapiente rerum recusandae, quos tenetur labore soluta dolore placeat deleniti similique necessitatibus velit et ab architecto? Necessitatibus neque officiis nihil suscipit enim error veniam sapiente nemo fuga.
    Vel labore reprehenderit earum aliquam, repudiandae asperiores blanditiis esse nulla distinctio ut aliquid nisi eveniet adipisci corrupti ab necessitatibus cumque fugit autem soluta accusantium provident numquam, harum dolor! Cumque, iure.
    Dolorum, nemo voluptatibus culpa excepturi quas unde quidem, recusandae iusto dolorem fuga eum repudiandae quis magnam veniam iste veritatis, illum iure eos. Consequuntur, sapiente enim mollitia facilis sed distinctio ea.
    Rerum id quod illum sint laboriosam nobis voluptatem dolorem eum in, eligendi consequuntur qui debitis aliquam dicta quidem voluptates nostrum enim, blanditiis asperiores veniam eius? Adipisci esse voluptates odit mollitia!
    Ipsa asperiores earum temporibus, cupiditate sint ex reiciendis tempora harum accusamus, id consequatur quo, molestiae velit delectus repellat perspiciatis voluptatum nemo. Blanditiis praesentium, quia magni alias minus saepe architecto perferendis!
    Magnam nobis quam ab rem aliquid doloremque suscipit sed quaerat mollitia, aspernatur qui quae totam eligendi sit debitis eum velit iure maxime. Tenetur, obcaecati. Blanditiis a suscipit facilis nihil iure!
    Facere, sit. Impedit corporis vitae nulla odit nemo neque illum error quasi, alias ea aspernatur sint non nobis illo sapiente, exercitationem recusandae delectus blanditiis ex harum amet. Quam, molestias dolore?
    Quisquam distinctio esse ullam consequuntur harum! Molestias explicabo tenetur ut dolorum expedita eius maxime nihil, natus vel facere sed! Recusandae velit quae incidunt asperiores expedita inventore at aliquid error voluptas.
    Molestiae quam aliquid at asperiores cum, ullam reprehenderit ducimus voluptates optio minus voluptate. Ullam facilis eligendi iusto distinctio velit asperiores consequatur quia accusamus, animi voluptatem delectus facere quas ad temporibus.
    Dicta ratione molestias vel quod! Consequatur quae delectus ullam ipsa numquam nobis quia vero in perspiciatis animi, enim accusamus neque iusto deleniti illum quisquam alias ipsum temporibus, pariatur nihil quam!
    Repudiandae libero ratione cupiditate aperiam sunt cumque neque impedit, voluptates culpa doloribus eos, quo illum quibusdam sit velit voluptatum excepturi laboriosam dolorum reprehenderit assumenda quaerat quis iste ea. Nam, officia?
    Rem nulla et illum recusandae obcaecati. Libero modi illo, est sapiente quos debitis, recusandae tenetur magnam aspernatur architecto error. Odio quod dolorem, ut nisi ipsum ipsa nostrum earum iusto iure.
    Provident iure minus voluptatem inventore facilis ipsum nisi? A veritatis culpa nemo earum, animi minus non, aliquam neque dolores quae accusantium fugiat praesentium itaque. Ex ullam blanditiis fugit laboriosam quos.
    Doloribus, illo voluptatibus magnam vero, deleniti, veniam aspernatur commodi laborum delectus laudantium eveniet nulla esse ab corporis ea minima! Voluptatem, illo? Repellat rerum impedit maxime voluptate! Corporis temporibus incidunt ratione?
    Dolorem quas quam maxime? Sed, quasi? Tempore blanditiis ea reiciendis, minima sunt veritatis accusamus, impedit eius laboriosam, expedita temporibus voluptates vitae. Nihil explicabo ex dolorem voluptatem ab corrupti officiis illo!
    Soluta veniam inventore sapiente dolorum non, ut, fugiat minima molestiae quae reprehenderit sunt unde ipsam voluptatem nam tempora ducimus quidem, et voluptatibus. Dicta architecto beatae ea quas ut, eos vitae?
    Eos nisi omnis similique iste optio doloremque, delectus voluptatum explicabo aut ab perferendis tempora nemo autem quo, architecto cumque? Dolorem optio molestias sunt dignissimos eius deserunt animi corrupti iure vel.
    Esse facilis minus labore aliquid autem doloribus nisi quod magnam expedita, accusamus tempore atque alias rerum perferendis consequuntur nihil totam dignissimos? Adipisci natus pariatur esse earum corrupti delectus aspernatur cumque!
    Vitae incidunt laboriosam sapiente repellat alias in totam, harum repellendus quod quis eius nobis iure veritatis deserunt consectetur sequi culpa quas quibusdam, magnam fugit maiores. Minus perspiciatis consequuntur voluptatem dolore!
    Voluptatum odio consequuntur eos, exercitationem omnis provident corrupti et veniam sed ipsa magnam odit at voluptatibus saepe quibusdam nostrum quam blanditiis magni officia ratione aut consequatur? Minus tenetur facere repellat.
    Animi magnam debitis id, est autem, natus blanditiis, laudantium deleniti temporibus explicabo dignissimos velit et corporis enim molestiae non nobis at quod quae recusandae nostrum? Eligendi obcaecati commodi aspernatur distinctio?
    Excepturi saepe aperiam eius vero molestiae laborum deserunt incidunt odit soluta autem expedita aut, iste distinctio ad, in fugit voluptatibus. Eveniet architecto eum, earum tenetur expedita tempore at quos. Reprehenderit.
    Quae culpa exercitationem doloremque quod accusamus adipisci! Labore vero laborum ullam pariatur, molestias assumenda eius inventore perferendis at consectetur, sapiente expedita nemo enim sit ea, tempora sed eaque sequi fugiat?
    Natus, cupiditate dicta aperiam debitis exercitationem libero, eveniet odio vel possimus optio odit quo deserunt perferendis aliquid in, necessitatibus repellat cum quasi culpa modi dignissimos. Ab natus enim sed sequi!`,
    date: "1748532924729",
  },
  {
    id: crypto.randomUUID(),
    title: "Know More About Heart Health",
    cover: "/blogs/3.png",
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam in quaerat porro, accusantium nostrum possimus. Hic molestias mollitia dicta iure consectetur corporis assumenda harum magnam modi. Animi debitis ullam velit.
    Recusandae, est deserunt! Suscipit magni harum tempora sed inventore nisi? Fugit amet eius eum enim quaerat ipsum deserunt earum nisi porro blanditiis corporis nobis, odit ut sed tenetur delectus neque!
    Sapiente eaque perferendis temporibus, laudantium odit nam? Perferendis doloribus provident vel harum impedit labore officia? A necessitatibus placeat doloremque rem ratione libero, sequi ex delectus facere hic modi, magnam accusamus.
    Neque voluptatibus, saepe consequuntur, reiciendis laboriosam totam excepturi, quos repellat praesentium necessitatibus commodi aliquid mollitia magnam accusantium? Soluta ducimus, fugiat reprehenderit quod aut provident officia eligendi culpa cum iusto at?
    Accusantium amet dolores quisquam asperiores error consequatur tenetur totam recusandae quibusdam nihil distinctio, ea doloribus quas delectus, numquam, dolorum accusamus! Animi voluptatum inventore deserunt incidunt est nihil debitis quod impedit.
    Sit odit quasi dolor tenetur totam. Magnam repudiandae, error incidunt delectus excepturi dolorem dolorum facere dolor veniam culpa aliquam officia a nobis similique. Aliquam, quo fugiat quisquam fugit architecto suscipit?
    Laborum id odit mollitia suscipit repellat quaerat veritatis aliquam omnis fugiat corrupti, nostrum saepe, autem iure, rem placeat inventore aspernatur corporis dolorum. Cum quia quo similique dolor, eligendi deserunt impedit.
    Veritatis nulla ad quos tenetur commodi, perspiciatis dolor, saepe, quod totam sit sunt porro officiis? Harum eaque quisquam nam perferendis fuga beatae, eveniet necessitatibus nobis amet corrupti dolorum! Reiciendis, facere!
    Dignissimos ex illo aut hic perspiciatis autem temporibus ab sequi distinctio atque assumenda placeat tempore suscipit, reprehenderit possimus consequatur dolores omnis porro! Minus distinctio dolorem modi sapiente natus repellat sed?
    Debitis, beatae suscipit assumenda laudantium officia quas repellendus id necessitatibus molestiae doloremque harum voluptate expedita soluta temporibus ipsa facilis optio fuga sunt itaque iure natus ut quidem minima? Recusandae, maxime?
    Incidunt est, molestias cumque temporibus dignissimos sint. Corporis placeat, distinctio quidem error recusandae quaerat doloribus eius amet at quae cumque debitis illo vero consectetur ut ducimus ad illum inventore vitae.
    Distinctio cumque et nam mollitia ratione qui, facere labore! Saepe molestias at recusandae quia quibusdam ratione, iste dicta quo quidem nihil? Repellat necessitatibus ducimus, quisquam voluptatum dolorum ad totam culpa!
    Explicabo nihil, ullam a accusantium consequatur repudiandae sequi distinctio eveniet qui saepe, labore eum aliquid eius voluptate earum doloribus? Tempore numquam illum perferendis voluptatibus autem veniam velit totam voluptates odio!
    Maxime, nulla? Sapiente nam libero asperiores illum necessitatibus, eveniet placeat fuga amet totam perferendis reprehenderit! Consectetur vero minus nostrum eius quasi, tempora illo porro facere nihil ipsam tenetur quidem culpa?
    Voluptas, facilis eum! Repellat impedit perspiciatis, laudantium dolorum dicta numquam eum error voluptatum distinctio obcaecati? Soluta quidem eum, suscipit expedita sint hic ipsam quasi ullam consequuntur placeat sunt laudantium maiores!
    Placeat nisi beatae corporis, voluptatum fugiat quae deserunt et dolor, vero neque doloribus ea, animi commodi necessitatibus fugit quaerat ut? Omnis quidem voluptatibus fugiat neque saepe expedita iste minus quae.
    Quis magni ut id molestiae aliquid dolores exercitationem repudiandae quod error voluptatem cum ex accusantium provident facere asperiores cupiditate culpa magnam, totam est fugit, aspernatur temporibus officia? Perspiciatis, dolore impedit!
    Rerum nemo quas molestias iste eaque nesciunt beatae. Numquam voluptate, vitae laboriosam maiores voluptates velit quasi perspiciatis iusto quis error praesentium nulla debitis, esse ratione quo earum maxime dicta temporibus?
    Voluptatibus doloribus, dolores expedita iure eum recusandae praesentium sunt officiis voluptatem eaque soluta! Magnam placeat numquam odio accusantium expedita esse, deleniti neque voluptate iure quaerat. Optio similique expedita qui officia!
    Dolorem, deserunt officiis earum cumque impedit adipisci unde temporibus ex. Eaque cumque exercitationem odio explicabo sunt consequuntur optio qui reiciendis iure, nisi beatae facilis quaerat quas deleniti vitae suscipit laudantium.
    Corporis voluptatibus sit aperiam laborum itaque quo voluptatum saepe accusantium magnam consequuntur inventore iure assumenda, vitae commodi veniam blanditiis officiis enim repellendus earum beatae. Quasi, sequi officiis? Blanditiis, maiores nobis!
    Commodi ullam accusamus, harum ut, magni nulla doloremque, sapiente suscipit possimus nam molestias aspernatur at? Ab magnam ea amet autem repudiandae beatae, animi optio facilis! Asperiores aperiam tempore debitis dicta?
    Fuga ex vitae, accusantium ea nam tempora, autem dolor esse sequi repudiandae dolores soluta quia. Obcaecati reiciendis, eveniet amet possimus nostrum hic a, corrupti error, ipsa nam expedita ipsam veniam?
    Iste cum voluptates sint, exercitationem tempore veniam. Minima, magni cumque temporibus quia beatae eius quas ipsa dicta at, nulla tempora reprehenderit itaque, ipsam delectus architecto. At quae laborum ipsam esse?
    Non, in. Ducimus illo ut quaerat perferendis facere magnam corrupti deleniti dolorum sequi similique eveniet sapiente molestiae labore veniam voluptas repellendus, corporis praesentium qui mollitia quasi placeat ipsa, repudiandae aperiam?
    Repellat, eos recusandae? Totam tempore dolores quae aperiam enim iusto ad vel, quas recusandae, possimus corrupti itaque ipsam. Natus repudiandae placeat eaque mollitia cupiditate, consectetur fugiat! Neque cupiditate aliquam sint?
    Dolorem, omnis accusantium sapiente rerum recusandae, quos tenetur labore soluta dolore placeat deleniti similique necessitatibus velit et ab architecto? Necessitatibus neque officiis nihil suscipit enim error veniam sapiente nemo fuga.
    Vel labore reprehenderit earum aliquam, repudiandae asperiores blanditiis esse nulla distinctio ut aliquid nisi eveniet adipisci corrupti ab necessitatibus cumque fugit autem soluta accusantium provident numquam, harum dolor! Cumque, iure.
    Dolorum, nemo voluptatibus culpa excepturi quas unde quidem, recusandae iusto dolorem fuga eum repudiandae quis magnam veniam iste veritatis, illum iure eos. Consequuntur, sapiente enim mollitia facilis sed distinctio ea.
    Rerum id quod illum sint laboriosam nobis voluptatem dolorem eum in, eligendi consequuntur qui debitis aliquam dicta quidem voluptates nostrum enim, blanditiis asperiores veniam eius? Adipisci esse voluptates odit mollitia!
    Ipsa asperiores earum temporibus, cupiditate sint ex reiciendis tempora harum accusamus, id consequatur quo, molestiae velit delectus repellat perspiciatis voluptatum nemo. Blanditiis praesentium, quia magni alias minus saepe architecto perferendis!
    Magnam nobis quam ab rem aliquid doloremque suscipit sed quaerat mollitia, aspernatur qui quae totam eligendi sit debitis eum velit iure maxime. Tenetur, obcaecati. Blanditiis a suscipit facilis nihil iure!
    Facere, sit. Impedit corporis vitae nulla odit nemo neque illum error quasi, alias ea aspernatur sint non nobis illo sapiente, exercitationem recusandae delectus blanditiis ex harum amet. Quam, molestias dolore?
    Quisquam distinctio esse ullam consequuntur harum! Molestias explicabo tenetur ut dolorum expedita eius maxime nihil, natus vel facere sed! Recusandae velit quae incidunt asperiores expedita inventore at aliquid error voluptas.
    Molestiae quam aliquid at asperiores cum, ullam reprehenderit ducimus voluptates optio minus voluptate. Ullam facilis eligendi iusto distinctio velit asperiores consequatur quia accusamus, animi voluptatem delectus facere quas ad temporibus.
    Dicta ratione molestias vel quod! Consequatur quae delectus ullam ipsa numquam nobis quia vero in perspiciatis animi, enim accusamus neque iusto deleniti illum quisquam alias ipsum temporibus, pariatur nihil quam!
    Repudiandae libero ratione cupiditate aperiam sunt cumque neque impedit, voluptates culpa doloribus eos, quo illum quibusdam sit velit voluptatum excepturi laboriosam dolorum reprehenderit assumenda quaerat quis iste ea. Nam, officia?
    Rem nulla et illum recusandae obcaecati. Libero modi illo, est sapiente quos debitis, recusandae tenetur magnam aspernatur architecto error. Odio quod dolorem, ut nisi ipsum ipsa nostrum earum iusto iure.
    Provident iure minus voluptatem inventore facilis ipsum nisi? A veritatis culpa nemo earum, animi minus non, aliquam neque dolores quae accusantium fugiat praesentium itaque. Ex ullam blanditiis fugit laboriosam quos.
    Doloribus, illo voluptatibus magnam vero, deleniti, veniam aspernatur commodi laborum delectus laudantium eveniet nulla esse ab corporis ea minima! Voluptatem, illo? Repellat rerum impedit maxime voluptate! Corporis temporibus incidunt ratione?
    Dolorem quas quam maxime? Sed, quasi? Tempore blanditiis ea reiciendis, minima sunt veritatis accusamus, impedit eius laboriosam, expedita temporibus voluptates vitae. Nihil explicabo ex dolorem voluptatem ab corrupti officiis illo!
    Soluta veniam inventore sapiente dolorum non, ut, fugiat minima molestiae quae reprehenderit sunt unde ipsam voluptatem nam tempora ducimus quidem, et voluptatibus. Dicta architecto beatae ea quas ut, eos vitae?
    Eos nisi omnis similique iste optio doloremque, delectus voluptatum explicabo aut ab perferendis tempora nemo autem quo, architecto cumque? Dolorem optio molestias sunt dignissimos eius deserunt animi corrupti iure vel.
    Esse facilis minus labore aliquid autem doloribus nisi quod magnam expedita, accusamus tempore atque alias rerum perferendis consequuntur nihil totam dignissimos? Adipisci natus pariatur esse earum corrupti delectus aspernatur cumque!
    Vitae incidunt laboriosam sapiente repellat alias in totam, harum repellendus quod quis eius nobis iure veritatis deserunt consectetur sequi culpa quas quibusdam, magnam fugit maiores. Minus perspiciatis consequuntur voluptatem dolore!
    Voluptatum odio consequuntur eos, exercitationem omnis provident corrupti et veniam sed ipsa magnam odit at voluptatibus saepe quibusdam nostrum quam blanditiis magni officia ratione aut consequatur? Minus tenetur facere repellat.
    Animi magnam debitis id, est autem, natus blanditiis, laudantium deleniti temporibus explicabo dignissimos velit et corporis enim molestiae non nobis at quod quae recusandae nostrum? Eligendi obcaecati commodi aspernatur distinctio?
    Excepturi saepe aperiam eius vero molestiae laborum deserunt incidunt odit soluta autem expedita aut, iste distinctio ad, in fugit voluptatibus. Eveniet architecto eum, earum tenetur expedita tempore at quos. Reprehenderit.
    Quae culpa exercitationem doloremque quod accusamus adipisci! Labore vero laborum ullam pariatur, molestias assumenda eius inventore perferendis at consectetur, sapiente expedita nemo enim sit ea, tempora sed eaque sequi fugiat?
    Natus, cupiditate dicta aperiam debitis exercitationem libero, eveniet odio vel possimus optio odit quo deserunt perferendis aliquid in, necessitatibus repellat cum quasi culpa modi dignissimos. Ab natus enim sed sequi!`,
    date: "1746459362183",
  },
  {
    id: crypto.randomUUID(),
    title: "Why Regular Health Check-ups Matter",
    cover: "/blogs/4.png",
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam in quaerat porro, accusantium nostrum possimus. Hic molestias mollitia dicta iure consectetur corporis assumenda harum magnam modi. Animi debitis ullam velit.
    Recusandae, est deserunt! Suscipit magni harum tempora sed inventore nisi? Fugit amet eius eum enim quaerat ipsum deserunt earum nisi porro blanditiis corporis nobis, odit ut sed tenetur delectus neque!
    Sapiente eaque perferendis temporibus, laudantium odit nam? Perferendis doloribus provident vel harum impedit labore officia? A necessitatibus placeat doloremque rem ratione libero, sequi ex delectus facere hic modi, magnam accusamus.
    Neque voluptatibus, saepe consequuntur, reiciendis laboriosam totam excepturi, quos repellat praesentium necessitatibus commodi aliquid mollitia magnam accusantium? Soluta ducimus, fugiat reprehenderit quod aut provident officia eligendi culpa cum iusto at?
    Accusantium amet dolores quisquam asperiores error consequatur tenetur totam recusandae quibusdam nihil distinctio, ea doloribus quas delectus, numquam, dolorum accusamus! Animi voluptatum inventore deserunt incidunt est nihil debitis quod impedit.
    Sit odit quasi dolor tenetur totam. Magnam repudiandae, error incidunt delectus excepturi dolorem dolorum facere dolor veniam culpa aliquam officia a nobis similique. Aliquam, quo fugiat quisquam fugit architecto suscipit?
    Laborum id odit mollitia suscipit repellat quaerat veritatis aliquam omnis fugiat corrupti, nostrum saepe, autem iure, rem placeat inventore aspernatur corporis dolorum. Cum quia quo similique dolor, eligendi deserunt impedit.
    Veritatis nulla ad quos tenetur commodi, perspiciatis dolor, saepe, quod totam sit sunt porro officiis? Harum eaque quisquam nam perferendis fuga beatae, eveniet necessitatibus nobis amet corrupti dolorum! Reiciendis, facere!
    Dignissimos ex illo aut hic perspiciatis autem temporibus ab sequi distinctio atque assumenda placeat tempore suscipit, reprehenderit possimus consequatur dolores omnis porro! Minus distinctio dolorem modi sapiente natus repellat sed?
    Debitis, beatae suscipit assumenda laudantium officia quas repellendus id necessitatibus molestiae doloremque harum voluptate expedita soluta temporibus ipsa facilis optio fuga sunt itaque iure natus ut quidem minima? Recusandae, maxime?
    Incidunt est, molestias cumque temporibus dignissimos sint. Corporis placeat, distinctio quidem error recusandae quaerat doloribus eius amet at quae cumque debitis illo vero consectetur ut ducimus ad illum inventore vitae.
    Distinctio cumque et nam mollitia ratione qui, facere labore! Saepe molestias at recusandae quia quibusdam ratione, iste dicta quo quidem nihil? Repellat necessitatibus ducimus, quisquam voluptatum dolorum ad totam culpa!
    Explicabo nihil, ullam a accusantium consequatur repudiandae sequi distinctio eveniet qui saepe, labore eum aliquid eius voluptate earum doloribus? Tempore numquam illum perferendis voluptatibus autem veniam velit totam voluptates odio!
    Maxime, nulla? Sapiente nam libero asperiores illum necessitatibus, eveniet placeat fuga amet totam perferendis reprehenderit! Consectetur vero minus nostrum eius quasi, tempora illo porro facere nihil ipsam tenetur quidem culpa?
    Voluptas, facilis eum! Repellat impedit perspiciatis, laudantium dolorum dicta numquam eum error voluptatum distinctio obcaecati? Soluta quidem eum, suscipit expedita sint hic ipsam quasi ullam consequuntur placeat sunt laudantium maiores!
    Placeat nisi beatae corporis, voluptatum fugiat quae deserunt et dolor, vero neque doloribus ea, animi commodi necessitatibus fugit quaerat ut? Omnis quidem voluptatibus fugiat neque saepe expedita iste minus quae.
    Quis magni ut id molestiae aliquid dolores exercitationem repudiandae quod error voluptatem cum ex accusantium provident facere asperiores cupiditate culpa magnam, totam est fugit, aspernatur temporibus officia? Perspiciatis, dolore impedit!
    Rerum nemo quas molestias iste eaque nesciunt beatae. Numquam voluptate, vitae laboriosam maiores voluptates velit quasi perspiciatis iusto quis error praesentium nulla debitis, esse ratione quo earum maxime dicta temporibus?
    Voluptatibus doloribus, dolores expedita iure eum recusandae praesentium sunt officiis voluptatem eaque soluta! Magnam placeat numquam odio accusantium expedita esse, deleniti neque voluptate iure quaerat. Optio similique expedita qui officia!
    Dolorem, deserunt officiis earum cumque impedit adipisci unde temporibus ex. Eaque cumque exercitationem odio explicabo sunt consequuntur optio qui reiciendis iure, nisi beatae facilis quaerat quas deleniti vitae suscipit laudantium.
    Corporis voluptatibus sit aperiam laborum itaque quo voluptatum saepe accusantium magnam consequuntur inventore iure assumenda, vitae commodi veniam blanditiis officiis enim repellendus earum beatae. Quasi, sequi officiis? Blanditiis, maiores nobis!
    Commodi ullam accusamus, harum ut, magni nulla doloremque, sapiente suscipit possimus nam molestias aspernatur at? Ab magnam ea amet autem repudiandae beatae, animi optio facilis! Asperiores aperiam tempore debitis dicta?
    Fuga ex vitae, accusantium ea nam tempora, autem dolor esse sequi repudiandae dolores soluta quia. Obcaecati reiciendis, eveniet amet possimus nostrum hic a, corrupti error, ipsa nam expedita ipsam veniam?
    Iste cum voluptates sint, exercitationem tempore veniam. Minima, magni cumque temporibus quia beatae eius quas ipsa dicta at, nulla tempora reprehenderit itaque, ipsam delectus architecto. At quae laborum ipsam esse?
    Non, in. Ducimus illo ut quaerat perferendis facere magnam corrupti deleniti dolorum sequi similique eveniet sapiente molestiae labore veniam voluptas repellendus, corporis praesentium qui mollitia quasi placeat ipsa, repudiandae aperiam?
    Repellat, eos recusandae? Totam tempore dolores quae aperiam enim iusto ad vel, quas recusandae, possimus corrupti itaque ipsam. Natus repudiandae placeat eaque mollitia cupiditate, consectetur fugiat! Neque cupiditate aliquam sint?
    Dolorem, omnis accusantium sapiente rerum recusandae, quos tenetur labore soluta dolore placeat deleniti similique necessitatibus velit et ab architecto? Necessitatibus neque officiis nihil suscipit enim error veniam sapiente nemo fuga.
    Vel labore reprehenderit earum aliquam, repudiandae asperiores blanditiis esse nulla distinctio ut aliquid nisi eveniet adipisci corrupti ab necessitatibus cumque fugit autem soluta accusantium provident numquam, harum dolor! Cumque, iure.
    Dolorum, nemo voluptatibus culpa excepturi quas unde quidem, recusandae iusto dolorem fuga eum repudiandae quis magnam veniam iste veritatis, illum iure eos. Consequuntur, sapiente enim mollitia facilis sed distinctio ea.
    Rerum id quod illum sint laboriosam nobis voluptatem dolorem eum in, eligendi consequuntur qui debitis aliquam dicta quidem voluptates nostrum enim, blanditiis asperiores veniam eius? Adipisci esse voluptates odit mollitia!
    Ipsa asperiores earum temporibus, cupiditate sint ex reiciendis tempora harum accusamus, id consequatur quo, molestiae velit delectus repellat perspiciatis voluptatum nemo. Blanditiis praesentium, quia magni alias minus saepe architecto perferendis!
    Magnam nobis quam ab rem aliquid doloremque suscipit sed quaerat mollitia, aspernatur qui quae totam eligendi sit debitis eum velit iure maxime. Tenetur, obcaecati. Blanditiis a suscipit facilis nihil iure!
    Facere, sit. Impedit corporis vitae nulla odit nemo neque illum error quasi, alias ea aspernatur sint non nobis illo sapiente, exercitationem recusandae delectus blanditiis ex harum amet. Quam, molestias dolore?
    Quisquam distinctio esse ullam consequuntur harum! Molestias explicabo tenetur ut dolorum expedita eius maxime nihil, natus vel facere sed! Recusandae velit quae incidunt asperiores expedita inventore at aliquid error voluptas.
    Molestiae quam aliquid at asperiores cum, ullam reprehenderit ducimus voluptates optio minus voluptate. Ullam facilis eligendi iusto distinctio velit asperiores consequatur quia accusamus, animi voluptatem delectus facere quas ad temporibus.
    Dicta ratione molestias vel quod! Consequatur quae delectus ullam ipsa numquam nobis quia vero in perspiciatis animi, enim accusamus neque iusto deleniti illum quisquam alias ipsum temporibus, pariatur nihil quam!
    Repudiandae libero ratione cupiditate aperiam sunt cumque neque impedit, voluptates culpa doloribus eos, quo illum quibusdam sit velit voluptatum excepturi laboriosam dolorum reprehenderit assumenda quaerat quis iste ea. Nam, officia?
    Rem nulla et illum recusandae obcaecati. Libero modi illo, est sapiente quos debitis, recusandae tenetur magnam aspernatur architecto error. Odio quod dolorem, ut nisi ipsum ipsa nostrum earum iusto iure.
    Provident iure minus voluptatem inventore facilis ipsum nisi? A veritatis culpa nemo earum, animi minus non, aliquam neque dolores quae accusantium fugiat praesentium itaque. Ex ullam blanditiis fugit laboriosam quos.
    Doloribus, illo voluptatibus magnam vero, deleniti, veniam aspernatur commodi laborum delectus laudantium eveniet nulla esse ab corporis ea minima! Voluptatem, illo? Repellat rerum impedit maxime voluptate! Corporis temporibus incidunt ratione?
    Dolorem quas quam maxime? Sed, quasi? Tempore blanditiis ea reiciendis, minima sunt veritatis accusamus, impedit eius laboriosam, expedita temporibus voluptates vitae. Nihil explicabo ex dolorem voluptatem ab corrupti officiis illo!
    Soluta veniam inventore sapiente dolorum non, ut, fugiat minima molestiae quae reprehenderit sunt unde ipsam voluptatem nam tempora ducimus quidem, et voluptatibus. Dicta architecto beatae ea quas ut, eos vitae?
    Eos nisi omnis similique iste optio doloremque, delectus voluptatum explicabo aut ab perferendis tempora nemo autem quo, architecto cumque? Dolorem optio molestias sunt dignissimos eius deserunt animi corrupti iure vel.
    Esse facilis minus labore aliquid autem doloribus nisi quod magnam expedita, accusamus tempore atque alias rerum perferendis consequuntur nihil totam dignissimos? Adipisci natus pariatur esse earum corrupti delectus aspernatur cumque!
    Vitae incidunt laboriosam sapiente repellat alias in totam, harum repellendus quod quis eius nobis iure veritatis deserunt consectetur sequi culpa quas quibusdam, magnam fugit maiores. Minus perspiciatis consequuntur voluptatem dolore!
    Voluptatum odio consequuntur eos, exercitationem omnis provident corrupti et veniam sed ipsa magnam odit at voluptatibus saepe quibusdam nostrum quam blanditiis magni officia ratione aut consequatur? Minus tenetur facere repellat.
    Animi magnam debitis id, est autem, natus blanditiis, laudantium deleniti temporibus explicabo dignissimos velit et corporis enim molestiae non nobis at quod quae recusandae nostrum? Eligendi obcaecati commodi aspernatur distinctio?
    Excepturi saepe aperiam eius vero molestiae laborum deserunt incidunt odit soluta autem expedita aut, iste distinctio ad, in fugit voluptatibus. Eveniet architecto eum, earum tenetur expedita tempore at quos. Reprehenderit.
    Quae culpa exercitationem doloremque quod accusamus adipisci! Labore vero laborum ullam pariatur, molestias assumenda eius inventore perferendis at consectetur, sapiente expedita nemo enim sit ea, tempora sed eaque sequi fugiat?
    Natus, cupiditate dicta aperiam debitis exercitationem libero, eveniet odio vel possimus optio odit quo deserunt perferendis aliquid in, necessitatibus repellat cum quasi culpa modi dignissimos. Ab natus enim sed sequi!`,
    date: "1781105812973",
  },
]

export const faqs = [
  {
    id: crypto.randomUUID(),
    question: "Is fasting required?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni architecto repellendus repellat nemo dolorem? Obcaecati consequatur voluptatibus laboriosam expedita vel accusamus debitis dicta eius! Distinctio ad iusto porro reiciendis laboriosam!",
  },
  {
    id: crypto.randomUUID(),
    question: "Is home collection really free?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni architecto repellendus repellat nemo dolorem? Obcaecati consequatur voluptatibus laboriosam expedita vel accusamus debitis dicta eius! Distinctio ad iusto porro reiciendis laboriosam!",
  },
  {
    id: crypto.randomUUID(),
    question: "How long for reports?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni architecto repellendus repellat nemo dolorem? Obcaecati consequatur voluptatibus laboriosam expedita vel accusamus debitis dicta eius! Distinctio ad iusto porro reiciendis laboriosam!",
  },
  {
    id: crypto.randomUUID(),
    question: "Which areas do you serve?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni architecto repellendus repellat nemo dolorem? Obcaecati consequatur voluptatibus laboriosam expedita vel accusamus debitis dicta eius! Distinctio ad iusto porro reiciendis laboriosam!",
  },
]

export const GenderEnums = ["MALE", "FEMALE", "OTHER"] as const

export const AddressTypeEnums = ["HOME", "OTHER"] as const

export const PaymentMethodEnums = ["ONLINE_PAYMENT", "COD"] as const
