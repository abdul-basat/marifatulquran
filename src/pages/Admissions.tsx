import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle, Download, ArrowRight, ArrowLeft } from "lucide-react";
import pattern from "@/assets/pattern.jpg";
import SEO from "@/components/SEO";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Admissions() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO title="Admissions" description="Apply for admission at Marifat Ul Quran. Check requirements, process, and online application form." />
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary text-primary py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${pattern})` }} />
          <div className="container relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Admissions</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Join Marifat Ul Quran and embark on your journey of sacred learning.</p>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12 bg-yellow-50 border-b border-yellow-100">
          <div className="container">
            <div className="flex gap-4 items-start max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-yellow-200">
              <AlertCircle className="h-6 w-6 text-yellow-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-yellow-800 mb-2">Important Notice Regarding Board Exams</h3>
                <p className="text-sm text-yellow-800/80 leading-relaxed">
                  Marifat Ul Quran submits examination admissions through Tanzeem Al-Madaris only for enrolled students.
                  Students must complete their full academic year, coursework, and preparatory sessions to be eligible.
                  External students cannot submit forms through the Jamia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements & Form */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Requirements */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">Required Documents</h3>
                  <ul className="space-y-4">
                    {[
                      "Copy of CNIC or B-Form (Student)",
                      "Copy of CNIC (Father/Guardian)",
                      "4 Passport Size Photographs (Blue Background)",
                      "Last Academic Result Card / Certificate",
                      "School Leaving Certificate (if applicable)"
                    ].map((req, i) => (
                      <li key={i} className="flex items-center gap-3 bg-card p-4 rounded-lg border">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                        <span className="text-sm font-medium">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Download Prospectus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get detailed information about our courses, rules, and fee structure.
                    </p>
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" /> Download PDF
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Application Form Wizard */}
              <Card className="border-t-4 border-t-primary h-fit">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Online Application</CardTitle>
                  <div className="flex justify-center gap-2 mt-4">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className={`h-2 w-16 rounded-full transition-colors ${step >= s ? 'bg-secondary' : 'bg-muted'}`} />
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-2">Step {step} of {totalSteps}</p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                    {/* Step 1: Personal Info */}
                    {step === 1 && (
                      <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="Student's Name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cnic">CNIC / B-Form Number</Label>
                          <Input id="cnic" placeholder="00000-0000000-0" />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="dob">Date of Birth</Label>
                            <Input id="dob" type="date" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gender">Gender</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Guardian & Course */}
                    {step === 2 && (
                      <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="space-y-2">
                          <Label htmlFor="guardian">Father/Guardian Name</Label>
                          <Input id="guardian" placeholder="Guardian's Name" />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="0300-0000000" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="student@example.com" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="course">Select Course</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose a Program" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="alim">Dars-e-Nizami (Alim/Alimah)</SelectItem>
                              <SelectItem value="hifz">Hifz-ul-Quran</SelectItem>
                              <SelectItem value="tajweed">Tajweed Course</SelectItem>
                              <SelectItem value="nazira">Nazira Quran</SelectItem>
                              <SelectItem value="online">Online Islamic Basics</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Address & Confirmation */}
                    {step === 3 && (
                      <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="space-y-2">
                          <Label htmlFor="address">Postal Address</Label>
                          <Textarea id="address" placeholder="Complete mailing address" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="Lahore" />
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200 text-sm text-yellow-800">
                          <p className="font-bold mb-1">Declaration:</p>
                          I hereby declare that the information provided is true to the best of my knowledge. I promise to abide by all rules and regulations of Marifat Ul Quran.
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between pt-4">
                      {step > 1 ? (
                        <Button type="button" variant="outline" onClick={prevStep}>
                          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                        </Button>
                      ) : <div />}

                      {step < totalSteps ? (
                        <Button type="button" className="bg-primary text-white" onClick={nextStep}>
                          Next Step <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      ) : (
                        <Button type="submit" className="bg-secondary text-primary font-bold hover:bg-secondary/90">
                          Submit Application
                        </Button>
                      )}
                    </div>

                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
