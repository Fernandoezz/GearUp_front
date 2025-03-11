import { NavLink } from "react-router-dom";
import { Users, ShoppingCart, ClipboardList } from "lucide-react"; 

const SideNavbar = () => {
  const menuItems = [
    { name: 'User Management', icon: <Users size={20} />, path: '/home' },
    { name: 'Cart Management', icon: <ShoppingCart size={20} />, path: '/cart' },
    { name: 'Order Management', icon: <ClipboardList size={20} />, path: '/order' },
  ];

  return (
    <div className="h-screen w-60 bg-gray-900 text-white p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.name === 'User Management' ? '/home' : `/${item.name.toLowerCase().split(' ')[0]}`}
            className={({ isActive }) =>
              `flex items-center p-2 rounded-md hover:bg-gray-700 transition ${
                isActive ? 'bg-gray-700' : ''
              }`
            }
          >
            {item.icon}
            <span className="ml-3">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default SideNavbar;