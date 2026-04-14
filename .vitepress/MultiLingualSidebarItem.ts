export interface MultiLingualSidebarItem {
  text: { de: string; en: string }, 
  link: string,                  
  collapsed?: boolean,           
  items?: MultiLingualSidebarItem[] 
}



