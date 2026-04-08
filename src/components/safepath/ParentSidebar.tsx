import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter, useSidebar,
} from '@/components/ui/sidebar';
import { NavLink } from '@/components/NavLink';
import { useLocation } from 'react-router-dom';
import { LayoutDashboard, MapPin, AlertTriangle, UserCircle, History, Route, ShieldCheck, Bell, Settings, HelpCircle, Shield } from 'lucide-react';

const navItems = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Live Tracking', url: '/tracking', icon: MapPin },
  { title: 'Alerts & Risks', url: '/alerts', icon: AlertTriangle },
  { title: 'Child Profile', url: '/child/child-1', icon: UserCircle },
  { title: 'Activity History', url: '/history', icon: History },
  { title: 'Route Intelligence', url: '/routes', icon: Route },
  { title: 'Pickup Verification', url: '/pickup', icon: ShieldCheck },
  { title: 'Notifications', url: '/notifications', icon: Bell },
];

const bottomItems = [
  { title: 'Settings', url: '/settings', icon: Settings },
  { title: 'Help & Support', url: '/help', icon: HelpCircle },
];

export function ParentSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="p-4">
        <NavLink to="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
            <Shield className="w-4 h-4 text-white" />
          </div>
          {!collapsed && <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SafePath AI</span>}
        </NavLink>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url || location.pathname.startsWith(item.url + '/')}>
                    <NavLink to={item.url} className="hover:bg-sidebar-accent" activeClassName="bg-sidebar-accent text-sidebar-primary font-medium">
                      <item.icon className="w-4 h-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <SidebarMenu>
          {bottomItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                <NavLink to={item.url} className="hover:bg-sidebar-accent" activeClassName="bg-sidebar-accent text-sidebar-primary font-medium">
                  <item.icon className="w-4 h-4" />
                  {!collapsed && <span>{item.title}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
