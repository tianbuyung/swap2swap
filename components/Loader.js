import Image from 'next/image';

import images from 'assets';

const Loader = () => (
  <div className="flexCenter w-full my-4 object-contain">
    <Image src={images.loader} alt="loader" width={100} priority />
  </div>
);

export default Loader;
