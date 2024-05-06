const GPUCard = ({ imgURL, changeBigGPUImage, bigGPUImg }) => {
  const handleClick = () => {
    if (bigGPUImg !== imgURL.bigGPU) {
      changeBigGPUImage(imgURL.bigGPU)
    }
  }

  return (
    <div
      className={`border-2 rounded-xl ${
        bigGPUImg === imgURL.bigGPU ? 'border-dark-red' : 'border-transparent'
      } cursor-pointer max-sm:flex-1    
      `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="gpu collection"
          width={127}
          height={103}
          className="object-contain"
        />
        <p className="absolute text-dark-red font-bold italic bottom-0 mb-2">{imgURL.text}</p>
      </div>
      
    </div>
  )
}

export default GPUCard
