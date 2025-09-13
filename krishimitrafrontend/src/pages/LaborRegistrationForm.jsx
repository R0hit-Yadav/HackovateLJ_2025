import  { useState } from 'react';
import { 
  User, Phone, Calendar, Users, 
  ChevronDown, Loader2, CheckCircle 
} from 'lucide-react';

const LaborRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    age: '',
    gender: '',
    specializations: []
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const specializationOptions = [
    "Planting",
    "Weeding",
    "Seeding",
    "Irrigation Management",
    "Harvesting Crops",
    "Sorting and Packing",
    "Animal Care",
    "Milking",
    "Fencing and Repairs",
    "Operating Farm Machinery",
    "Pest Control"
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.match(/^[A-Za-z\s]{3,}$/)) {
      newErrors.fullName = "Name should contain only letters and be at least 3 characters long";
    }
    
    if (!formData.phoneNumber.match(/^\d{10}$/)) {
      newErrors.phoneNumber = "Phone number should be exactly 10 digits";
    }
    
    if (!formData.age || formData.age < 18 || formData.age > 70) {
      newErrors.age = "Age must be between 18 and 70";
    }
    
    if (!formData.gender) {
      newErrors.gender = "Please select a gender";
    }
    
    if (formData.specializations.length === 0) {
      newErrors.specializations = "Please select at least one specialization";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('http://localhost:8000/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000);
          setFormData({
            fullName: '',
            phoneNumber: '',
            age: '',
            gender: '',
            specializations: []
          });
        } else {
          const errorData = await response.json();
          console.error('Submission error:', errorData);
        }
      } catch (error) {
        console.error('Network error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleSpecializationToggle = (specialization) => {
    setFormData(prev => ({
      ...prev,
      specializations: prev.specializations.includes(specialization)
        ? prev.specializations.filter(s => s !== specialization)
        : [...prev.specializations, specialization]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.01]">
          <div className="bg-green-600 py-6 px-8">
            <h2 className="text-3xl font-bold text-white text-center">
              Labor Registration
            </h2>
            <p className="text-green-100 text-center mt-2">
              Complete your profile to join our agricultural workforce
            </p>
          </div>

          <form onSubmit={handleSubmit} className="py-8 px-8 space-y-6">
            {/* Full Name Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className={`block w-full pl-10 pr-3 py-3 border ${
                    errors.fullName ? 'border-red-300' : 'border-gray-300'
                  } rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors`}
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
              {errors.fullName && (
                <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Phone Number Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  className={`block w-full pl-10 pr-3 py-3 border ${
                    errors.phoneNumber ? 'border-red-300' : 'border-gray-300'
                  } rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                />
              </div>
              {errors.phoneNumber && (
                <p className="mt-2 text-sm text-red-600">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Age Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  className={`block w-full pl-10 pr-3 py-3 border ${
                    errors.age ? 'border-red-300' : 'border-gray-300'
                  } rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                  placeholder="Enter your age"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
              </div>
              {errors.age && (
                <p className="mt-2 text-sm text-red-600">{errors.age}</p>
              )}
            </div>

            {/* Gender Selection */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className={`block w-full pl-10 pr-3 py-3 border ${
                    errors.gender ? 'border-red-300' : 'border-gray-300'
                  } rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none`}
                  value={formData.gender}
                  onChange={(e) => setFormData({...formData, gender: e.target.value})}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              {errors.gender && (
                <p className="mt-2 text-sm text-red-600">{errors.gender}</p>
              )}
            </div>

            {/* Specializations */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specializations
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specializationOptions.map((specialization) => (
                  <div
                    key={specialization}
                    className={`px-4 py-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                      formData.specializations.includes(specialization)
                        ? 'bg-green-100 border-green-500'
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                    onClick={() => handleSpecializationToggle(specialization)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{specialization}</span>
                      {formData.specializations.includes(specialization) && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {errors.specializations && (
                <p className="mt-2 text-sm text-red-600">{errors.specializations}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : isSuccess ? (
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Registration Successful!</span>
                  </div>
                ) : (
                  'Complete Registration'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LaborRegistrationForm;