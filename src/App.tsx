import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";

import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Admissions from "@/pages/Admissions";
import Courses from "@/pages/Courses";
import Contact from "@/pages/Contact";
import Results from "@/pages/Results";
import Blog from "@/pages/Blog";
import NotFound from "@/pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/admissions" component={Admissions} />
        <Route path="/courses" component={Courses} />
        <Route path="/results" component={Results} />
        <Route path="/contact" component={Contact} />
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
