import { Bell, MessageCircle, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const whatsappAccounts = [
  {
    id: "1",
    phoneNumber: "+1 (555) 123-4567",
    cabinetName: "Downtown Dental",
    newMessages: 5,
    pendingChats: 2,
  },
  {
    id: "2",
    phoneNumber: "+1 (555) 234-5678",
    cabinetName: "Uptown Smiles",
    newMessages: 0,
    pendingChats: 1,
  },
  {
    id: "3",
    phoneNumber: "+1 (555) 345-6789",
    cabinetName: "Suburban Orthodontics",
    newMessages: 3,
    pendingChats: 0,
  },
  {
    id: "4",
    phoneNumber: "+1 (555) 456-7890",
    cabinetName: "Kids Dental Care",
    newMessages: 1,
    pendingChats: 3,
  },
];

export default function Component() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">
        Dental Practice WhatsApp Management
      </h1>
      <Tabs defaultValue={whatsappAccounts[0].id} className="w-full">
        <TabsList className="flex flex-wrap justify-start">
          {whatsappAccounts.map((account) => (
            <TabsTrigger
              key={account.id}
              value={account.id}
              className="flex items-center space-x-2 px-4 py-2"
            >
              <div className="flex flex-col items-start">
                <span className="font-medium">{account.cabinetName}</span>
                <span className="text-xs text-gray-500 flex items-center">
                  <Phone className="inline mr-1 h-3 w-3" />
                  {account.phoneNumber}
                </span>
              </div>
              <div className="flex space-x-1">
                {account.newMessages > 0 && (
                  <Badge variant="secondary" className="text-xs">
                    <MessageCircle className="mr-1 h-3 w-3" />
                    {account.newMessages}
                  </Badge>
                )}
                {account.pendingChats > 0 && (
                  <Badge variant="outline" className="text-xs">
                    <Bell className="mr-1 h-3 w-3" />
                    {account.pendingChats}
                  </Badge>
                )}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        {whatsappAccounts.map((account) => (
          <TabsContent key={account.id} value={account.id} className="mt-4">
            {/* Display account details and chat/message list here */}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
