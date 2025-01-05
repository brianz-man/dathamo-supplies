import { Service } from '../types/service';

export const services: Service[] = [
  {
    id: 'tiling',
    title: 'Floor Tiling',
    description: 'Professional floor tiling services with premium materials and expert installation',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
    icon: 'Grid',
    features: ['Premium tile selection', 'Expert installation', 'Perfect alignment', 'Durable finish']
  },
  {
    id: 'ceiling',
    title: 'Ceiling Installation',
    description: 'Custom ceiling solutions including POP, suspended, and decorative designs',
    image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?auto=format&fit=crop&w=800&q=80',
    icon: 'ArrowUp',
    features: ['Modern designs', 'Quality materials', 'Professional finish', 'Sound insulation']
  },
  {
    id: 'tv-mounting',
    title: 'TV Wall Mounting',
    description: 'Secure and clean TV wall mounting with cable management',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    icon: 'Tv',
    features: ['Secure mounting', 'Cable management', 'Any TV size', 'Perfect positioning']
  },
  {
    id: 'curtains',
    title: 'Curtain Installation',
    description: 'Complete curtain and blind installation services',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    icon: 'Curtains',
    features: ['All types of curtains', 'Rod installation', 'Professional hanging', 'Style consultation']
  },
  {
    id: 'kitchen',
    title: 'Kitchen Equipment',
    description: 'Kitchen appliance installation and sales',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80',
    icon: 'Utensils',
    features: ['Quality appliances', 'Expert installation', 'Warranty service', 'Maintenance tips']
  },
  {
    id: 'plumbing',
    title: 'Plumbing Services',
    description: 'Complete plumbing solutions for your home',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80',
    icon: 'Droplet',
    features: ['Tap installation', 'Sink fitting', 'Shower setup', 'Quality fixtures']
  },
  {
    id: 'windows',
    title: 'Window Installation',
    description: 'Professional window pane installation and repair',
    image: 'https://images.unsplash.com/photo-1527195575508-5b138d14a35b?auto=format&fit=crop&w=800&q=80',
    icon: 'Window',
    features: ['Quality glass', 'Perfect fitting', 'Weather sealing', 'Safety features']
  }
];