export default function Services() {
  return (
    <section className="px-8 my-12">
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="flex-1 border-t border-gray-400"></div>
        <span className="text-xs uppercase tracking-widest text-gray-600 font-semibold">Layanan Kami</span>
        <div className="flex-1 border-t border-gray-400"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-3 w-full md:w-1/3">
          <button className="bg-black text-white py-3 px-6 rounded-lg font-medium text-sm tracking-wide hover:bg-gray-800 transition text-center shadow">
            How to order
          </button>
          <button className="bg-black text-white py-3 px-6 rounded-lg font-medium text-sm tracking-wide hover:bg-gray-800 transition text-center shadow">
            Konfirmasi Pembayaran
          </button>
        </div>

        <div className="flex flex-col items-center w-full md:w-1/3 text-center">
          <h2 className="text-2xl font-black italic tracking-wider border-b-2 border-black pb-1 mb-3">
            LEGACY KEEPS INSIPIRING
          </h2>
          <p className="text-xs tracking-widest text-gray-500 mb-4">Find Us</p>
          <div className="flex gap-4 text-lg">
            <span className="cursor-pointer hover:text-gray-600">IG</span>
            <span className="cursor-pointer hover:text-gray-600">WA</span>
            <span className="cursor-pointer hover:text-gray-600">Shopee</span>
            <span className="cursor-pointer hover:text-gray-600">TikTok</span>
          </div>
        </div>
      </div>
    </section>
  );
}