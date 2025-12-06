import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, Calendar, MapPin, Briefcase, CheckCircle2 } from "lucide-react";

const registrationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  address: z.string().min(5, "Address must be at least 5 characters").max(200),
  city: z.string().min(2, "City must be at least 2 characters").max(100),
  occupation: z.string().min(2, "Occupation must be at least 2 characters").max(100),
});

type RegistrationData = z.infer<typeof registrationSchema>;

interface RegistrationFormProps {
  onSubmit: (data: RegistrationData) => void;
}

const RegistrationForm = ({ onSubmit }: RegistrationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-foreground/80 flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            First Name
          </Label>
          <Input
            id="firstName"
            placeholder="John"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-destructive text-sm">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-foreground/80 flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            Last Name
          </Label>
          <Input
            id="lastName"
            placeholder="Doe"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-destructive text-sm">{errors.lastName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground/80 flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john.doe@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-destructive text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground/80 flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-destructive text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth" className="text-foreground/80 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            Date of Birth
          </Label>
          <Input
            id="dateOfBirth"
            type="date"
            {...register("dateOfBirth")}
          />
          {errors.dateOfBirth && (
            <p className="text-destructive text-sm">{errors.dateOfBirth.message}</p>
          )}
        </div>

        {/* Occupation */}
        <div className="space-y-2">
          <Label htmlFor="occupation" className="text-foreground/80 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-primary" />
            Occupation
          </Label>
          <Input
            id="occupation"
            placeholder="Software Developer"
            {...register("occupation")}
          />
          {errors.occupation && (
            <p className="text-destructive text-sm">{errors.occupation.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="address" className="text-foreground/80 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Street Address
          </Label>
          <Input
            id="address"
            placeholder="123 Main Street, Apt 4B"
            {...register("address")}
          />
          {errors.address && (
            <p className="text-destructive text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* City */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="city" className="text-foreground/80 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            City
          </Label>
          <Input
            id="city"
            placeholder="New York"
            {...register("city")}
          />
          {errors.city && (
            <p className="text-destructive text-sm">{errors.city.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        variant="glow"
        size="lg"
        className="w-full mt-8"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <>
            <CheckCircle2 className="w-5 h-5" />
            Submit Registration
          </>
        )}
      </Button>
    </form>
  );
};

export default RegistrationForm;
