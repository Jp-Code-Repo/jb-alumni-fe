import { ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { navigation } from "@/app/config/navigation";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

function RenderItem({
  item,
}: {
  item: (typeof navigation)[number]["items"][number];
}) {
  if (item.children?.length) {
    return (
      <Collapsible defaultOpen className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton>
              {item.icon && <item.icon />}

              <span>{item.title}</span>

              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <SidebarMenuSub>
              {item.children.map((child) => (
                <SidebarMenuSubItem key={child.title}>
                  <RenderSubItem item={child} />
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    );
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          to={item.href!}
          activeProps={{
            className: "bg-accent text-accent-foreground",
          }}
        >
          {item.icon && <item.icon />}
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

function RenderSubItem({ item }: { item: any }) {
  if (item.children?.length) {
    return (
      <Collapsible className="group/collapsible">
        <CollapsibleTrigger asChild>
          <SidebarMenuSubButton>
            {item.icon && <item.icon />}
            <span>{item.title}</span>

            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuSubButton>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenuSub>
            {item.children.map((child: any) => (
              <SidebarMenuSubItem key={child.title}>
                <RenderSubItem item={child} />
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <SidebarMenuSubButton asChild>
      <Link
        to={item.href!}
        activeProps={{
          className: "bg-accent text-accent-foreground",
        }}
      >
        {item.icon && <item.icon />}
        <span>{item.title}</span>
      </Link>
    </SidebarMenuSubButton>
  );
}

export default function AppNavigation() {
  return (
    <>
      {navigation.map((group) => (
        <SidebarGroup key={group.title}>
          <SidebarGroupLabel>{group.title}</SidebarGroupLabel>

          <SidebarMenu>
            {group.items.map((item) => (
              <RenderItem key={item.title} item={item} />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
}