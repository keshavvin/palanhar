import { FaCheckCircle, FaCloudUploadAlt } from 'react-icons/fa';

export function Spinner({ light = true }) {
  return (
    <span
      className={`inline-block h-4 w-4 animate-spin rounded-full border-2 ${
        light ? 'border-white/40 border-t-white' : 'border-primary-green/30 border-t-primary-green'
      }`}
      aria-hidden="true"
    />
  );
}

export function FieldError({ id, children }) {
  if (!children) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm font-medium text-red-600">
      {children}
    </p>
  );
}

export function TextField({ id, label, error, hint, optional = false, className = '', inputClassName = '', ...props }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-gray-700">
        {label}
        {optional && <span className="ml-1 font-normal text-gray-400">(optional)</span>}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`input-field ${error ? 'border-red-400 focus:border-red-500' : ''} ${inputClassName}`}
        {...props}
      />
      {hint && !error && <p className="mt-1.5 text-xs text-gray-400">{hint}</p>}
      <FieldError id={`${id}-error`}>{error}</FieldError>
    </div>
  );
}

export function SelectField({ id, label, error, options, placeholder, className = '', ...props }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-gray-700">
        {label}
      </label>
      <select
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`input-field appearance-none ${error ? 'border-red-400 focus:border-red-500' : ''}`}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <FieldError id={`${id}-error`}>{error}</FieldError>
    </div>
  );
}

export function UploadBox({ id, label, fileName, onFile, error }) {
  return (
    <div>
      <span className="mb-1.5 block text-sm font-semibold text-gray-700">{label}</span>
      <label
        htmlFor={id}
        className={`flex min-h-11 cursor-pointer items-center gap-4 rounded-xl border-2 border-dashed px-4 py-5 transition-colors duration-300 focus-within:ring-2 focus-within:ring-primary-green/40 ${
          fileName
            ? 'border-primary-green bg-primary-green/5'
            : error
              ? 'border-red-400 bg-red-50/50 hover:border-red-500'
              : 'border-gray-300 bg-gray-50 hover:border-primary-green/70 hover:bg-cream-white'
        }`}
      >
        <input
          id={id}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          className="sr-only"
          onChange={(e) => {
            const file = e.target.files && e.target.files[0];
            if (file) onFile(file.name);
          }}
        />
        {fileName ? (
          <FaCheckCircle className="shrink-0 text-2xl text-primary-green" aria-hidden="true" />
        ) : (
          <FaCloudUploadAlt className="shrink-0 text-3xl text-primary-green/60" aria-hidden="true" />
        )}
        <span className="min-w-0">
          {fileName ? (
            <>
              <span className="block truncate text-sm font-semibold text-dark-green">{fileName}</span>
              <span className="block text-xs text-gray-500">Uploaded — click to replace</span>
            </>
          ) : (
            <>
              <span className="block text-sm font-semibold text-gray-700">Click to upload a clear copy</span>
              <span className="block text-xs text-gray-400">PDF, JPG or PNG · Demo: any file works</span>
            </>
          )}
        </span>
      </label>
      <FieldError id={`${id}-error`}>{error}</FieldError>
    </div>
  );
}
