"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Send, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  projectType: string
  budget: string
  message: string
}

interface FormState {
  status: "idle" | "loading" | "success" | "error"
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    projectType: "",
    budget: "",
    message: "",
  })

  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  })

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ status: "loading", message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setFormState({
          status: "success",
          message: "Thank you for your message! I'll get back to you soon.",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          projectType: "",
          budget: "",
          message: "",
        })
      } else {
        setFormState({
          status: "error",
          message: result.error || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      setFormState({
        status: "error",
        message: "Network error. Please check your connection and try again.",
      })
    }
  }

  const isLoading = formState.status === "loading"
  const isFormValid = formData.name && formData.email && formData.subject && formData.message

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Me a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              type="text"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          {/* Project Type and Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectType">Project Type</Label>
              <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-development">Web Development</SelectItem>
                  <SelectItem value="mobile-app">Mobile App</SelectItem>
                  <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                  <SelectItem value="consulting">Game Development</SelectItem>
                  <SelectItem value="consulting">Help With Programming</SelectItem>
                  <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project, goals, timeline, or any questions you have..."
              rows={6}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          {/* Status Messages */}
          {formState.message && (
            <Alert
              className={formState.status === "success" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}
            >
              {formState.status === "success" ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-600" />
              )}
              <AlertDescription className={formState.status === "success" ? "text-green-800" : "text-red-800"}>
                {formState.message}
              </AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full" disabled={!isFormValid || isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to receive email responses regarding your inquiry.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
