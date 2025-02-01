"use client";
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, Mail } from 'lucide-react';


function QrCodeGenerator() {

    const [url, setUrl] = React.useState("");
    const [color, setColor] = React.useState("#ffffff");
    const [bgColor, setBgColor] = React.useState("#282fc4");
    const [logo, setLogo] = React.useState<File | string | null>(null);
    const [logoFile, setLogoFile] = React.useState<File | null>(null);
    const [qrType, setQrType] = React.useState("link");
    const [email, setEmail] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");

    return (
        <div className="relative z-10 mx-6 flex max-w-[1250px] w-full min-h-[700px] h-full">
            <Card className="flex-1 flex flex-col w-full h-auto mx-auto bg-[#ffffff]/90 backdrop-blur-md shadow-sm border-2 border-[#ffffff]/40
                rounded-xl">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center text-[#282fc4]/80">QR Code Generator</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <div className="h-full flex flex-col md:flex-row gap-8">
                        <div className="flex-1 space-y-6">
                            <Tabs defaultValue="link"className="space-y-6"
                            onValueChange={(val)=> setQrType(val)}
                            >
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

                                    <TabsContent value="link">
                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <label htmlFor="url" className="font-semibold text-[#282fc4]/80">URL</label>
                                                <Input 
                                                    id="url" 
                                                    type="text" 
                                                    value={url} 
                                                    placeholder="https://example.com"
                                                    onChange={(e) => setUrl(e.target.value)}
                                                    className="w-full border-2 border-[#282fc4]/80 focus:border-black rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-500"
                                                />
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>

                                <div className="space-y-4">
                                    <div className="flex space-x-4">
                                        <div className="space-y-2 flex-1">
                                            <label
                                                htmlFor="Color"
                                                className="font-semibold text-[#282fc4]/80"
                                            >QR Code Color</label>

                                            <div className="flex items-center gap-1">
                                                <div className="relative w-12 flex-1 h-12 rounded-md border-2 border-[#282fc4]/80"
                                                style={{backgroundColor: color}}
                                                >
                                                    <input 
                                                        type="color"
                                                        value={color}
                                                        onChange={(e) => setColor(e.target.value)}
                                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                                                    />
                                                </div>
                                                <Input
                                                    type="text"
                                                    value={color}
                                                    onChange={(e) => setColor(e.target.value)}
                                                    className="flex-1 border-2 h-12 bg-transparent border-[#282fc4]/80 focus:border-black rounded-md outline-none focus-visible:ring-0"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2 flex-1">
                                            <label
                                                htmlFor="Color"
                                                className="font-semibold text-[#282fc4]/80"
                                            >Background Color</label>

                                            <div className="flex items-center gap-1">
                                                <div className="relative w-12 flex-1 h-12 rounded-md border-2 border-[#282fc4]/80"
                                                style={{backgroundColor: bgColor}}
                                                >
                                                    <input 
                                                        type="color"
                                                        value={color}
                                                        onChange={(e) => setBgColor(e.target.value)}
                                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                                                    />
                                                </div>
                                                <Input
                                                    type="text"
                                                    value={color}
                                                    onChange={(e) => setBgColor(e.target.value)}
                                                    className="flex-1 border-2 h-12 bg-transparent border-[#282fc4]/80 focus:border-black rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="logo" className="font-bold text-[#282fc4]/80">
                                            Logo
                                        </Label>

                                        <Input
                                            type="file"
                                            id="logo"
                                            accept="image/*"
                                            onChange={(e: any) => {
                                                if (e.target.files && e.target.files[0]) {
                                                    setLogo(e.target.files[0]);

                                                    const reader = new FileReader();
                                                    reader.onload = () => {
                                                        setLogo(reader.result as string);
                                                        reader.readAsDataURL(e.target.files[0]);
                                                    };
                                                }
                                            }}
                                            className="w-full border-2 border-[#282fc4]/80 focus:border-black rounded-md outline-none focus-visible:ring-0"
                                        />
                                    </div>
                                </div>
                        </div>
                        <div className="relative flex-1 border-4 border-[#282fc4]/80 rounded-lg flex flex-col justify-center space-y-6"></div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default QrCodeGenerator