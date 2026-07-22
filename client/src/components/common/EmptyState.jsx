

export default function EmptyState({ message }) {
  return (
    <div className="flex justify-center items-center py-20">
      <h2 className="text-2xl font-semibold text-gray-500">
        {message}
      </h2>
    </div>
  );
}