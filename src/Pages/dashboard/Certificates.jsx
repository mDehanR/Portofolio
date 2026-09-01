import { useState } from "react";
import { certificatesData } from "../../data/certificates";

export default function Certificates() {
  const [certificates] = useState(certificatesData);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Certificates</h2>
          <p className="text-sm text-gray-400">Kelola sertifikat portofolio Anda.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-medium text-white">{certificate.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{certificate.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
