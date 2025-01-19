const Loader = ({isLoadingOn}) => {
    if(!isLoadingOn){return null}
  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999999999999999]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900">

        </div>
    </div>
    </>
  )
}

export default Loader;