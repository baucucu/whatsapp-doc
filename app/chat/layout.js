import React from "react";
import { Bell, MessageCircle, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const whatsappAccounts = [
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

export default function WhatsAppLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 w-full">
      <div className="w-full bg-white shadow-md">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Dental Practice WhatsApp Management
          </h1>
          <Tabs defaultValue={whatsappAccounts[0].id} className="w-full mt-6">
            <TabsList className="flex flex-wrap justify-start bg-gray-100 p-1 rounded-md w-full">
              {whatsappAccounts.map((account) => (
                <TabsTrigger
                  key={account.id}
                  value={account.id}
                  className="flex items-center space-x-2 px-4 py-2 text-sm h-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
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
                      <Badge
                        variant="secondary"
                        className="text-xs bg-blue-100 text-blue-800"
                      >
                        <MessageCircle className="mr-1 h-3 w-3" />
                        {account.newMessages}
                      </Badge>
                    )}
                    {account.pendingChats > 0 && (
                      <Badge
                        variant="outline"
                        className="text-xs border-yellow-400 text-yellow-800"
                      >
                        <Bell className="mr-1 h-3 w-3" />
                        {account.pendingChats}
                      </Badge>
                    )}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="mt-4 w-full flex-grow">{children}</div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
