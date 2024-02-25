import { icons } from 'lucide-react';

function Icons({ name, color, size, className }) {
    const LucideIcon = icons[name];

    return <span className={className}><LucideIcon color={color} size={size} /></span>;
};

export default Icons;