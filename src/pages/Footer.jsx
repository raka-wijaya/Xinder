import React from 'react';
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdCategory, MdOutlineDashboard, MdOutlineSupportAgent, MdOutlineBusinessCenter, MdOutlineHelpOutline, MdOutlineMonetizationOn } from 'react-icons/md';

const footerLinks = [
  {
    title: 'Categories',
    icon: <MdCategory className="text-xl" />,
    links: ['User Interface', 'User Experience', 'Digital Media', 'Lifestyle', 'Programming', 'Animation']
  },
  {
    title: 'Product',
    icon: <MdOutlineDashboard className="text-xl" />,
    links: ['Pricing', 'Overview', 'Browse', 'Accessibility', 'Five', 'Changelog']
  },
  {
    title: 'Solutions',
    icon: <MdOutlineSupportAgent className="text-xl" />,
    links: ['Brainstorming', 'Ideation', 'Wireframing', 'Research', 'Design', 'Concept']
  },
  {
    title: 'Resources',
    icon: <MdOutlineHelpOutline className="text-xl" />,
    links: ['Help Center', 'Blog', 'Tutorials', 'FAQs', 'Community', 'Events']
  },
  {
    title: 'Support',
    icon: <MdOutlineMonetizationOn className="text-xl" />,
    links: ['Contact Us', 'Developers', 'Documentation', 'Integrations', 'Reports', 'Webinar']
  },
  {
    title: 'Company',
    icon: <MdOutlineBusinessCenter className="text-xl" />,
    links: ['About', 'Press', 'Events', 'Careers', 'Customers', 'Partners']
  },
];

const socialIcons = [
  { icon: <FaYoutube />, url: 'https://accounts.google.com/ServiceLogin' },
  { icon: <FaFacebookF />, url: 'https://www.facebook.com/login' },
  { icon: <FaTwitter />, url: 'https://twitter.com/login' },
  { icon: <FaInstagram />, url: 'https://www.instagram.com/accounts/login' },
  { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/login' },
];

const WebsiteFooter = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 px-4">
      <div className="container mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-gray-300">
          {footerLinks.map((column, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h4 className="font-bold flex items-center gap-2">
                {column.icon}
                {column.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="/" className="hover:text-blue-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bagian Bawah: Copyright dan Sosial Media */}
        <div className="mt-8 flex flex-col md:flex-row md:items-start justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className="text-sm">
              @ 2023 Xinder, Inc. All rights reserved.
            </p>
          </div>
          
          <div className="md:w-1/2 text-left md:text-right">
            <div className="flex justify-start md:justify-end gap-4 mb-4">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.url} className="text-gray-500 hover:text-blue-600 transition-colors">
                  <span className="text-2xl">{social.icon}</span>
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-lg md:ml-auto">
              In sed posuere sed ullamcorper feugiat. Lacinia elit neque, ipsum, non. Tellus mattis enim volutpat habitasse. Semper posuere lectus consectetur aliquam et ullamcorper. Dictumst aenean justo fames diam eget volutpat vestibulum elit.
              Blandit aliquet bibendum pellentesque turpis id penatibus faucibus id nunc. Aenean rhoncus, erat pellentesque eu. Quis morbi condimentum phasellus in ultricies eu smet.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WebsiteFooter;