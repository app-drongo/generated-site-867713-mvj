// Template-enhanced component
// Generated: 2025-08-20T01:54:10.423Z
// Section: services
// Category: services
// Template ID: services-c002

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Code2,
  Palette,
  Globe,
  Shield,
  Rocket,
  Users,
  BarChart3,
  Cpu
} from "lucide-react"

export default function ServicesListDescriptions() {
  const services = [
    {
      id: "sap-implementation",
      title: "SAP Implementation",
      description: "Seamless SAP implementation for manufacturing and supply chain optimization",
      longDescription: "Our experienced SAP consultants will guide you through every step of the implementation process, from system design to user training. We ensure your SAP solutions are tailored to your unique business requirements and integrated seamlessly with your existing infrastructure.",
      icon: Cpu,
      benefits: [
        "Comprehensive business process analysis",
        "Customized SAP module configuration",
        "Data migration and system integration",
        "User acceptance testing and go-live support"
      ],
      pricing: "Starting at $50,000",
      timeline: "6-12 months typical engagement",
      featured: true,
      badge: "Most Popular"
    },
    {
      id: "sap-support",
      title: "SAP Support & Maintenance",
      description: "Ongoing support and optimization for your SAP ecosystem",
      longDescription: "Maximize the value of your SAP investment with our comprehensive support services. Our team of certified SAP experts provides 24/7 technical assistance, software updates, and performance tuning to ensure your systems are running at peak efficiency.",
      icon: Users,
      benefits: [
        "Proactive monitoring and issue resolution",
        "Scheduled upgrades and patches",
        "Custom reporting and analytics",
        "Dedicated account management"
      ],
      pricing: "Starting at $5,000/month",
      timeline: "Ongoing service"
    },
    {
      id: "sap-integration",
      title: "SAP Integration Services",
      description: "Seamless integration of SAP with your existing systems",
      longDescription: "Our integration experts will connect your SAP solutions with other critical business applications, ensuring data flows smoothly and your operations are streamlined. We leverage APIs, middleware, and custom connectors to create a unified, enterprise-wide system.",
      icon: Globe,
      benefits: [
        "Inventory management and ERP integration",
        "CRM and customer service integration",
        "Warehouse management and logistics integration",
        "Business intelligence and reporting integration"
      ],
      pricing: "Project-based pricing",
      timeline: "4-8 weeks per integration project"
    },
    {
      id: "sap-optimization",
      title: "SAP Optimization",
      description: "Maximize the performance and ROI of your SAP ecosystem",
      longDescription: "Our team of SAP experts will analyze your current systems and processes, identify areas for improvement, and implement optimizations to drive greater efficiency, productivity, and cost savings. From custom workflows to performance tuning, we'll help you get the most out of your SAP investment.",
      icon: BarChart3,
      benefits: [
        "Business process re-engineering",
        "Performance and scalability improvements",
        "Change management and user training",
        "Continuous improvement and optimization"
      ],
      pricing: "Custom quotes available",
      timeline: "3-6 months typical engagement"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            SAP Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Unlock the Full Potential of
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Your SAP Investment
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive services to implement, integrate, and optimize your SAP systems for maximum impact.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Pricing:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Get Started
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Unlock the Power of SAP</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our SAP experts are ready to help you streamline your manufacturing and supply chain operations. Schedule a consultation to get started.
          </p>
          <Button size="lg">
            Schedule a Consultation
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}