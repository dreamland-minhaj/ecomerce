const Settings = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col">
  {/* Header */}
  <header className="bg-white shadow-sm">
    <div className="container mx-auto px-6 py-4">
      <h1 className="text-2xl font-bold text-gray-700">Settings</h1>
    </div>
  </header>
  {/* Main Section */}
  <main className="container mx-auto px-6 py-8">
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Profile Settings
      </h2>
      <form>
        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        {/* Password Field */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
    {/* Account Settings */}
    <div className="bg-white shadow rounded-lg p-6 mt-8">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Account Settings
      </h2>
      <form>
        {/* Enable Notifications */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">
              Enable Notifications
            </span>
          </label>
        </div>
        {/* Account Privacy */}
        <div className="mb-4">
          <label
            htmlFor="privacy"
            className="block text-sm font-medium text-gray-700"
          >
            Privacy
          </label>
          <select
            id="privacy"
            name="privacy"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option>Public</option>
            <option>Private</option>
          </select>
        </div>
        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
    {/* Danger Zone */}
    <div className="bg-white shadow rounded-lg p-6 mt-8">
      <h2 className="text-xl font-semibold text-red-600 mb-4">Danger Zone</h2>
      <div className="flex justify-between items-center">
        <span className="text-gray-700">Delete Account</span>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>
  </main>
</div>
    </>
  )
}

export default Settings