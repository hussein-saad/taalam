import img from "../assets/SVG/math.svg";
import phone from "../assets/SVG/phone.svg";

const ResourcesPage = () => {
  return (
    <section className="bg-gradient-to-b from-[#17435C] to-[#0c212e] text-white text-center md:text-right px-2">
      <div className="flex flex-col md:flex-row justify-center items-center container mx-auto h-screen">
        <img
          src={img}
          alt="math"
          className="h-[300px] md:h-[400px] lg:h-[500px]"
        />
        <div className="flex flex-col items-center md:items-end justify-center gap-6">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold">
            Symbolab ، جعل الرياضيات أبسط
          </h1>
          <p className="opacity-90 text-sm sm:text-base">
            هو أداة تعليمية متخصصة في حل المعادلات الرياضية والمعادلات الجبرية
            المعقدة بطريقة سهلة ومباشرة. يتيح للطلاب والباحثين إمكانية حل
            المسائل الرياضية في مختلف المجالات مثل الجبر، التفاضل والتكامل،
            الإحصاء، والمعادلات التفاضلية خطوة بخطوة. سيمبولاب يعتبر خيارًا
            مثاليًا للطلاب الذين يبحثون عن دعم إضافي في حل التمارين الرياضية
            وفهم الخطوات المتبعة في الحل
          </p>
          <a
            href="https://www.symbolab.com/"
            target="_blank"
            className="bg-[#007EC5] text-white w-full md:w-auto px-4 py-2 rounded-xl shadow-xl hover:bg-transparent hover:border-white border-2 border-[#17435C] transition-all ease-in-out duration-300"
          >
            الذهاب للموقع
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center container mx-auto h-screen ">
        <img
          src={phone}
          alt="math"
          className="h-[300px] md:h-[400px] lg:h-[500px]"
        />
        <div className="flex flex-col items-center md:items-end justify-center gap-6">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold">
            Photomath ، حل المسائل الرياضية بسهولة
          </h1>
          <p className="opacity-90 text-sm sm:text-base">
            هو تطبيق تعليمي يتيح للمستخدمين حل المسائل الرياضية بشكل سريع ودقيق
            باستخدام كاميرا الهاتف الذكي. بمجرد توجيه الكاميرا نحو المسألة، يقوم
            التطبيق بقراءة المسألة الرياضية وتحليلها، ثم يقدم الحل خطوة بخطوة مع
            شرح تفصيلي لكيفية الوصول إلى الحل
          </p>
          <a
            href="https://photomath.com/install/"
            target="_blank"
            className="bg-[#007EC5] text-white w-full md:w-auto px-4 py-2 rounded-xl shadow-xl hover:bg-transparent hover:border-white border-2 border-[#17435C] transition-all ease-in-out duration-300"
          >
            الذهاب للموقع
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPage;
