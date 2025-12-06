import { Button } from "@/components/ui/button";
import { CheckCircle2, User, Mail, Phone, Calendar, MapPin, Briefcase, ArrowLeft } from "lucide-react";
import { format } from "date-fns";

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

interface SuccessDisplayProps {
  data: RegistrationData;
  onReset: () => void;
}

const SuccessDisplay = ({ data, onReset }: SuccessDisplayProps) => {
  const formattedDate = format(new Date(data.dateOfBirth), "MMMM dd, yyyy");

  const infoItems = [
    { icon: User, label: "Full Name", value: `${data.firstName} ${data.lastName}` },
    { icon: Mail, label: "Email Address", value: data.email },
    { icon: Phone, label: "Phone Number", value: data.phone },
    { icon: Calendar, label: "Date of Birth", value: formattedDate },
    { icon: Briefcase, label: "Occupation", value: data.occupation },
    { icon: MapPin, label: "Address", value: `${data.address}, ${data.city}` },
  ];

  return (
    <div className="animate-scale-in">
      {/* Success Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6 glow-effect">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          Registration <span className="text-gradient">Successful!</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Your application has been submitted successfully
        </p>
      </div>

      {/* Submitted Data Display */}
      <div className="glass-card rounded-2xl p-8 mb-8">
        <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          Submitted Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infoItems.map((item, index) => (
            <div
              key={item.label}
              className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="text-foreground font-medium truncate">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timestamp */}
      <div className="text-center mb-8">
        <p className="text-sm text-muted-foreground">
          Submitted on {format(new Date(), "MMMM dd, yyyy 'at' hh:mm a")}
        </p>
      </div>

      {/* Back Button */}
      <Button
        onClick={onReset}
        variant="outline"
        size="lg"
        className="w-full"
      >
        <ArrowLeft className="w-5 h-5" />
        Submit Another Registration
      </Button>
    </div>
  );
};

export default SuccessDisplay;
