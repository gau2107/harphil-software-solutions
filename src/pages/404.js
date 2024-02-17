import BackToHomeButton from "../components/common/BackToHomeButton";

export default function NotFound() {
  return (
    <div className="text-center text-black">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl my-4">Not Found</p>
      <BackToHomeButton />
    </div>
  )
}