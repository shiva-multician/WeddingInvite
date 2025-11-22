import config from "@/config/config";
import { Clock, Navigation as NavigationIcon, MapPin, CalendarCheck, Phone, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion';
import { formatEventDate } from "@/lib/formatEventDate";

export default function Location() {
    return (
        <div className="text-center px-6 sm:px-10 py-16">
            <h2 className="text-3xl font-serif text-rose-600">
                Thank You ❤️
            </h2>
            <p className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed">
                We look forward to celebrating this special moment with you.
            </p>
        </div>
    )
}