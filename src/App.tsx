import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
import { lazy, Suspense } from "react";

import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ScrollToTop from "@/components/ScrollToTop";

// Home loads immediately (landing page - no delay)
import Home from "@/pages/Home";

// Other pages lazy load for better performance (code splitting)
const About = lazy(() => import("@/pages/About"));
const Admissions = lazy(() => import("@/pages/Admissions"));
const Courses = lazy(() => import("@/pages/Courses"));
const Contact = lazy(() => import("@/pages/Contact"));
const Results = lazy(() => import("@/pages/Results"));
const Blog = lazy(() => import("@/pages/Blog"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Minimal loading indicator for lazy pages
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-8 h-8 border-3 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

// Wrapper for lazy components
function LazyRoute({ component: Component, ...props }: { component: React.ComponentType; path?: string }) {
  return (
    <Route {...props}>
      {() => (
        <Suspense fallback={<PageLoader />}>
          <Component />
        </Suspense>
      )}
    </Route>
  );
}

function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        {/* Home page loads immediately - no spinner */}
        <Route path="/" component={Home} />

        {/* Other pages lazy load with minimal spinner */}
        <LazyRoute path="/about" component={About} />
        <LazyRoute path="/admissions" component={Admissions} />
        <LazyRoute path="/courses" component={Courses} />
        <LazyRoute path="/results" component={Results} />
        <LazyRoute path="/contact" component={Contact} />
        <LazyRoute path="/gallery" component={Gallery} />

        {/* Fallback to Home */}
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
