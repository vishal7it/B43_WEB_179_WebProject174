export interface MaintenanceRequest {
  id: string;
  title: string;
  description: string;
  category: 'plumbing' | 'electrical' | 'general' | 'appliance' | 'structural';
  urgency: 'low' | 'medium' | 'high';
  status: 'pending' | 'in_progress' | 'completed';
  images: string[];
  createdAt: string;
  updatedAt: string;
  timeline: TimelineEvent[];
}

export interface TimelineEvent {
  id: string;
  type: 'created' | 'updated' | 'completed';
  message: string;
  timestamp: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
}

export interface User {
  id: string;
  name: string;
  role: 'tenant' | 'landlord';
  avatar: string;
  email: string;
  properties: string[];
}