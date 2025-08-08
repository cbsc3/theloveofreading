
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function Navbar() {
  return (
    <NavigationMenu.Root className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold">
            MySite
          </div>

          {/* Navigation Links */}
          <NavigationMenu.List className="flex space-x-6">
            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="#"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                Home
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="#"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                About
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="#"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                Contact
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </div>
      </div>
    </NavigationMenu.Root>
  );
}
