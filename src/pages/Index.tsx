import { useState } from "react";
import RegistrationForm from "@/components/RegistrationForm";
import SuccessDisplay from "@/components/SuccessDisplay";
import { ClipboardList } from "lucide-react";

interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  occupation: string;
}

const Index = () => {
  const [submittedData, setSubmittedData] = useState<RegistrationData | null>(null);

  const handleSubmit = (data: RegistrationData) => {
    // Simulate form submission
    setTimeout(() => {
      setSubmittedData(data);
    }, 500);
  };

  const handleReset = () => {
    setSubmittedData(null);
  };

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {!submittedData ? (
          <div className="animate-fade-in">
            {/* Header */}
            <header className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 border border-primary/20">
                <ClipboardList className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Online <span className="text-gradient">Registration</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-md mx-auto">
                Complete the form below to submit your application. All fields are required.
              </p>
            </header>

            {/* Form Card */}
            <section className="glass-card rounded-3xl p-8 md:p-10 glow-effect">
              <RegistrationForm onSubmit={handleSubmit} />
            </section>

            {/* Footer */}
            <footer className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                Your information is secure and will not be shared with third parties.
              </p>
            </footer>
          </div>
        ) : (
          <SuccessDisplay data={submittedData} onReset={handleReset} />
        )}
      </div>
    </main>
  );
};

export default Index;
