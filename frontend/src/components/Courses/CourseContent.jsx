import ReactPlayer from "react-player";

const CourseContent = ({ id }) => {
  return (
    <section className="p-8 text-right">
      <h1 className="text-4xl font-bold text-white">المقدمه</h1>
      <p className="text-white text-lg opacity-90 border-r-2 border-l-2 p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        sed consequuntur natus blanditiis earum nam cumque eaque quod iusto.
        Deserunt assumenda ipsam repellendus at dolorem repudiandae hic atque ex
        in? Voluptatum harum quo doloribus nemo magni aut? Incidunt esse at ad
        tenetur, id placeat non vel veritatis cumque, ipsam cupiditate. Id
        magnam vel eius soluta reiciendis. Atque adipisci quia sint? Quod
        distinctio labore voluptas pariatur molestias voluptate amet! Aliquam
        commodi cum deserunt suscipit quibusdam nobis vitae facilis dolorem,
        modi veritatis quas asperiores. In, laboriosam quae. Quae dolor iste
        perspiciatis obcaecati! Asperiores a alias dolorem repellendus, veniam
        cumque! Nulla nisi, doloremque sequi laboriosam cum earum, itaque, a
        provident officiis delectus veritatis repellendus deserunt voluptatibus
        aliquam excepturi quisquam eos qui natus ad? Quaerat animi voluptatem
        sed ad illum blanditiis, ipsa nemo consequatur nesciunt exercitationem,
        saepe soluta, quas expedita? Atque aspernatur nesciunt autem pariatur
        blanditiis, reiciendis ullam deserunt quisquam illum eligendi a
        repudiandae. Esse modi molestias ipsum quaerat incidunt temporibus, id
        animi nemo maiores sapiente rem mollitia delectus, tempora quae
        similique ratione earum impedit, sequi deleniti repellendus facere!
        Nihil, assumenda! Harum, necessitatibus quibusdam? Enim, mollitia? Quia
        minus porro harum, quod voluptate voluptatem molestiae nobis labore,
        menda et eos facere blanditiis illum laborum rem labore voluptates
        quidem porro officiis autem tempore est perferendis delectus!
      </p>
      <div className="mt-10">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          controls
          width="70%"
          height="700px"
          className="mx-auto"
        />
      </div>

      <h1 className="text-4xl font-bold text-center text-white mt-10">
        المصادر
      </h1>
      <div className="flex flex-col justify-center items-center gap-4 mt-4">
        <a
          href="https://www.google.com"
          className="text-white text-lg font-bold hover:text-blue-300"
        >
          https://www.google.com
        </a>
        <a
          href="#"
          className="text-white text-lg font-bold hover:text-blue-300"
        >
          https://www.google.com
        </a>
        <a
          href="#"
          className="text-white text-lg font-bold hover:text-blue-300"
        >
          https://www.google.com
        </a>
        <a
          href="#"
          className="text-white text-lg font-bold hover:text-blue-300"
        >
          https://www.google.com
        </a>
        <a
          href="#"
          className="text-white text-lg font-bold hover:text-blue-300"
        >
          https://www.google.com
        </a>
        <a
          href="#"
          className="text-white text-lg font-bold hover:text-blue-300"
        >
          https://www.google.com
        </a>
      </div>
    </section>
  );
};

export default CourseContent;
