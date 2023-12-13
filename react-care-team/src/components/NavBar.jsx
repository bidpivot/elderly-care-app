import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="hidden max-w-sm lg:block lg:w-64 lg:p-4 bg-yellow-300 rounded-lg">
      <div className="h-full overflow-y-auto">
        <nav className="px-2 space-y-1">
          <Link
            to="/doctors"
            className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
          >
            Doctors
          </Link>
          <Link
            to="/tasks"
            className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
          >
            Tasks
          </Link>
          <Link
            to="/prescriptions"
            className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
          >
            Prescriptions
          </Link>
        </nav>
      </div>
    </div>
  );
}
