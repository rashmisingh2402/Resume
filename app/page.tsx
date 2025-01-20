"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Resume() {
  return (
    <div className="min-h-screen bg-[url('/space-background.jpg')] bg-cover bg-center text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-xl shadow-xl">
          <div className="flex flex-col items-center mb-6">
            <Image
              src="/profile-picture.jpg"
              alt="Rashmi Singh"
              width={200}
              height={200}
              className="rounded-full mb-4"
            />
            <h1 className="text-4xl font-bold">Rashmi Singh</h1>
            <p className="text-xl">Human Resources Professional</p>
          </div>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>Address: Berlin, 10367 Germany</p>
          <p>Phone: +4915778675538</p>
          <p>E-mail: rashmi1singh0@gmail.com</p>
          <p>WWW: www.linkedin.com/in/rashmi-singh-a83a15247</p>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Languages</h2>
          <ul>
            <li>English: Bilingual or Proficient (C2)</li>
            <li>Hindi: Bilingual or Proficient (C2)</li>
            <li>German: Elementary (A2)</li>
          </ul>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Microsoft Office",
              "Document Management System (DMS)",
              "Human Resource Management System (HRMS)",
              "Payroll Management System",
              "HR Policy & Compliance",
              "Diversity and Inclusion",
              "Performance Management",
              "Employment Law",
              "Talent Acquisition",
              "Content Writing",
              "Customer Engagement & Satisfaction",
              "CRM software proficiency",
            ].map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Work History</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Customer Relationship Manager</h3>
              <p>B. M. Hyundai Pvt. Ltd., Gujarat, India</p>
              <p>2023-06 - 2023-10</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Led efforts to resolve customer complaints, ensuring timely and efficient vehicle servicing.</li>
                <li>Coordinated follow-up programs and scheduled appointments to improve customer satisfaction.</li>
                <li>
                  Generated and analyzed monthly customer satisfaction reports, utilizing factory-generated surveys to
                  assess service quality.
                </li>
                <li>
                  Maintained detailed records of customer case histories, ensuring accurate documentation of service
                  issues and their resolutions.
                </li>
                <li>
                  Created engaging content for customer newsletters, strengthening brand loyalty and communication.
                </li>
                <li>
                  Contributed to management meetings by sharing insights on customer service improvements and
                  operational efficiency.
                </li>
                <li>Managed customer relations on ongoing basis to maximize customer retention.</li>
                <li>
                  Managed a team of customer service representatives, providing coaching and guidance for improved
                  performance.
                </li>
                <li>
                  Directed 10-person team of customer service personnel while helping front-line team members work
                  effectively with over 70 daily customers.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Officer-Personnel & Administration</h3>
              <p>Galentic Pharma India Pvt. Ltd., Gujarat, India</p>
              <p>2021-04 - 2023-06</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Coordinated full recruitment process, from job interviews to onboarding of new employees.</li>
                <li>
                  Administered training programs in accordance with company&aposs training calendar and kept detailed
                  records of employee development.
                </li>
                <li>
                  Managed payroll, including attendance, overtime, and leave administration, ensuring accuracy and
                  compliance with internal policies.
                </li>
                <li>
                  Maintained up-to-date HR records and documentation, including personal and training files for both
                  staff and workmen.
                </li>
                <li>
                  Supported government audits (US FDA, MHRA, Health Canada, ISO), ensuring compliance with HR policies
                  and industry regulations.
                </li>
                <li>
                  Assisted with HR MIS reporting, providing critical data to management on workforce performance and
                  compliance.
                </li>
                <li>
                  Provided administrative support in the absence of the P&A Officer and Supervisor, handling diverse HR
                  activities as required.
                </li>
                <li>Improved department efficiency by streamlining and implementing policies and processes.</li>
                <li>Maintained strict adherence to industry regulations, minimizing risk exposure for organization.</li>
                <li>
                  Coordinated cross-functional teams to address complex issues, leading to more efficient
                  problem-solving processes.
                </li>
                <li>Frequently inspected production area to verify proper equipment operation.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Frontline Communication Officer (BPO)</h3>
              <p>Aquila Logisolutions LLP, Gujarat, India</p>
              <p>2020-10 - 2021-04</p>
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Conducted cold and warm calls to Australian clients to market and sell services, consistently meeting
                  sales targets.
                </li>
                <li>
                  Established rapport with customers through a professional and friendly communication style, improving
                  customer retention.
                </li>
                <li>
                  Developed and implemented effective telemarketing scripts that were adopted department-wide, boosting
                  overall sales performance.
                </li>
                <li>
                  Assisted in training new staff, ensured that new staff is equipped with the necessary skills to
                  succeed in the role.
                </li>
                <li>
                  Processed up to 500 customer calls per day, providing information, resolving issues, and driving
                  sales.
                </li>
                <li>
                  Analyzed data from communications campaigns to identify areas of improvement and make necessary
                  adjustments for future success.
                </li>
                <li>
                  Developed crisis communication plans to effectively address potential issues and maintain company
                  reputation.
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">MBA: International Human Resources Management</h3>
              <p>International University of Applied Sciences - Berlin, Germany</p>
              <p>2023-10 - 2024-12</p>
              <p>Grade: 2.3 (German grading system)</p>
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Completed University-level Coursework: (Performance Management, International Marketing, Managerial
                  Economics, Innovation and Entrepreneurship, Strategic Management, Leadership, Business Ethics and
                  Corporate Governance, Operations and Information Management, Corporate Finance, Human Resource
                  Management: Theory, Project: Human Resources Management, Talent Management & HR Development) from IU
                  International University of Applied Sciences
                </li>
                <li>
                  Thesis Statement: The Role of HR in Ensuring Compliance Across Jurisdictions in a Globalized Workplace
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">BBA: Human Resources Management</h3>
              <p>Marwadi University - Gujarat, India</p>
              <p>2017-04 - 2020-06</p>
              <p>GPA: 8.00 CGPA</p>
              <ul className="list-disc pl-5 mt-2">
                <li>
                  A study on performance Appraisal Practices as a tool to improve employee performance in service
                  sector, The report of the research has been titled as ―A Study on Performance Appraisal Practices as a
                  Tool to Improve Employee Performance in Service Sector. The study was basically based on the study of
                  overall employees performance appraisal. - Research Project
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Project</h2>
          <ul className="list-disc pl-5">
            <li>MU Fest (annual cultural event), 2017 to 2020</li>
            <li>Member of Cultural Club</li>
            <li>The Role of HR in Ensuring Compliance Across Jurisdictions in a Globalized Workplace.</li>
          </ul>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Internship</h2>
          <p>Austin Engineering Company Ltd., Junagarh, Gujarat, 22 days</p>
          <p>The mentioned company deals in the manufacturing of various ball bearings.</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Gained hands-on experience across various departments, including Production, HR, Quality, Purchase, and
              Marketing, providing a comprehensive understanding of business operations.
            </li>
            <li>
              Contributed to multiple aspects of the company&aposs manufacturing processes, HR policies, quality control
              procedures, procurement practices, and marketing strategies., Austin Engineering Company Ltd., Completed
              2020
            </li>
          </ul>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Phone numbers</h2>
          <p>+49 15778675538, +91 8789404733</p>
        </Card>
      </div>
    </div>
  )
}

