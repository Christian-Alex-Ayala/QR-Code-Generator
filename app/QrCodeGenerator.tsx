"use client";
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { Link, Mail } from 'lucide-react';


function QrCodeGenerator() {
    return (
        <div className="relative z-10 mx-6 flex max-w-[1250px] w-full min-h-[700px] h-full">
            <Card className="flex-1 flex flex-col w-full h-auto mx-auto bg-[#ffffff] backdrop-blur-md shadow-sm border-2 border-[#ffffff]/40
                rounded-xl">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center text-[#282fc4]/80">QR Code Generator</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <div className="h-full flex flex-col md:flex-row gap-8">
                        <div className="flex-1 space-y-6">
                            <Tabs defaultValue="link"className="space-y-6">
                                    <TabsList className="h-10 w-full grid grid-cols-2 bg-[#282fc4]/80 text-lg">
                                        <TabsTrigger value="link" className="text-white font-bold">
                                            <Link className="w-4 h-4 mr-2" />
                                            Link
                                        </TabsTrigger>
                                        <TabsTrigger value="email" className="text-white font-bold">
                                            <Mail className="w-4 h-4 mr-2" />
                                            Email
                                        </TabsTrigger>
                                    </TabsList>
                                </Tabs>
                        </div>
                        <div className="relative flex-1 bg-[#282fc4]/80 rounded-lg flex flex-col justify-center space-y-6"></div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default QrCodeGenerator